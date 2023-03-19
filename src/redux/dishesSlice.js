import { createSlice } from '@reduxjs/toolkit'
// Начать сначала установку ридакс

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: "BURGER"
    },
    reducers: {
      dishesCategory: (state, action) => {
        state.selectedCategory = action.payload
      }
      },
    })


export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { dishesCategory } = dishesSlice.actions;
export default dishesSlice.reducer