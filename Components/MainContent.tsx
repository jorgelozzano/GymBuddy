import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import ExercisesList from './ExercisesList';
import { addExercise as addExerciseRTK } from '../slices/exercisesSlice';
import { EmptyState } from './EmptyState';

const MainContent = () => {
  const exercises = useSelector((state: RootState) => state.exercises)
  const dispatch = useDispatch()
  const [exercises1, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState('');
  useEffect(() => {
    loadExercises();
  }, [exercises]);
  const ereaseAllData = async () => {
    await AsyncStorage.clear();
  }
  const loadExercises = async () => {
    try {
      const storedExercises = await AsyncStorage.getItem('exercises');
      if (storedExercises) {
        setExercises(JSON.parse(storedExercises));
      }
    } catch (error) {
      console.error('Error loading exercises:', error);
    }
  };

  const saveExercises = async (updatedExercises) => {
    try {
      await AsyncStorage.setItem('exercises', JSON.stringify(updatedExercises));
    } catch (error) {
      console.error('Error saving exercises:', error);
    }
  };

  const addExercise = () => {
    if (newExercise.trim() !== '') {
      const updatedExercises = [...exercises1, { name: newExercise, weight: 0 }];
      dispatch(addExerciseRTK({ id: 1,name: 'newExercise', weight: 0 }))
      setExercises(updatedExercises);
      saveExercises(updatedExercises);
      setNewExercise('');
    }
  };

  const removeExercise = (index) => {
    const updatedExercises = [...exercises1];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
    saveExercises(updatedExercises);
  };

  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{item.name}</Text>
      <Text>Weight: {item.weight}</Text>
      <TouchableOpacity onPress={() => removeExercise(index)}>
        <Text style={{ color: 'red' }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      {exercises.exercises.length === 0 ? 
      <View style={{ height: '100%'}}>
      <EmptyState type="empty_exercises" text='No exercises yet!'/>
      </View>
      : 
      <View>
      <Button title='Erease All' onPress={ereaseAllData}/>
      <TextInput
      placeholder="Enter exercise name"
      value={newExercise}
      onChangeText={(text) => setNewExercise(text)}
    />
    <TouchableOpacity onPress={addExercise}>
      <Text>Add Exercise</Text>
    </TouchableOpacity>
    <View style={{backgroundColor: 'coral'}}>
    <ExercisesList/>
    </View>
    </View>
    }
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  }
})

export default MainContent;