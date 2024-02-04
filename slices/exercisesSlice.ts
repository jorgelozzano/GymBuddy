import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Exercise {
    id: number
    exerciseName: string,
    weight: number
}

export interface ExerciseState {
  exercises: Exercise[]
}

const initialState: ExerciseState = {
  exercises: [],
}

export const exerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {

    addExercise: (state, {payload}) => {
        state.exercises.push(payload);
    },
    deleteAllExercises: (state) => {
      state.exercises = null;
    },
    deleteExercise: (state, {payload}) => {
        const exerciseIndex = state.exercises.findIndex((exercise) => exercise.id === payload);
      if (exerciseIndex !== -1) {
        state.exercises.splice(exerciseIndex, 1);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addExercise, deleteAllExercises, deleteExercise } = exerciseSlice.actions

export default exerciseSlice.reducer