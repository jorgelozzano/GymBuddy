import {Text, View, StyleSheet, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

type Props = {
    exerciseName: string,
    weight: number,
    index: number
}

const ExerciseCard = ({exerciseName, weight}: Props) => {
    const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState('');
  useEffect(() => {
    // Load exercises from AsyncStorage when the component mounts
    loadExercises();
  }, []);
  const saveExercises = async (updatedExercises) => {
    try {
      await AsyncStorage.setItem('exercises', JSON.stringify(updatedExercises));
    } catch (error) {
      console.error('Error saving exercises:', error);
    }
  };
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
    const deleteExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
    saveExercises(updatedExercises);
    }
  return (
    <View style={styles.container}>
        <Text>Name: {exerciseName}</Text>
        <Text>Weight: {weight}</Text>
        <Button title='Remove' onPress={deleteExercise}/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#bdbd21',
  }
})

export default ExerciseCard;