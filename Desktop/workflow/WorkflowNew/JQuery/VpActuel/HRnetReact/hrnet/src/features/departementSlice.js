import { createSlice } from '@reduxjs/toolkit';

const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    value: '', // département sélectionné (vide au départ)
  },
  reducers: {
    setDepartment: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;
