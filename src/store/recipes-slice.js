import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
    name: 'recipe',
    initialState: {
        items: []
    },
    reducers: {
        addRecipe(state, action) {

            state.items = action.payload
        }
    }
})

export const recipesActions = recipesSlice.actions;
export default recipesSlice;