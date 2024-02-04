import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState('');
  useEffect(() => {
    // Load exercises from AsyncStorage when the component mounts
    loadExercises();
  }, []);
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

  const removeExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
    saveExercises(updatedExercises);
  };

  const renderItem = ({ item, index }) => (
    // <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //   <Text>{item.name}</Text>
    //   <Text>Weight: {item.weight}</Text>
    //   <TouchableOpacity onPress={() => removeExercise(index)}>
    //     <Text style={{ color: 'red' }}>Remove</Text>
    //   </TouchableOpacity>
    // </View>
    <ExerciseCard exerciseName={item.name} weight={item.weight} index={index}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8698bf',
  }
})

export default ExercisesList;