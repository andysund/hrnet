// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from '../src/features/departementSlice';

export const Store = configureStore({
  reducer: {
    department: departmentReducer,
    // Vous pouvez ajouter d'autres slices ici
  },
});

export default Store
