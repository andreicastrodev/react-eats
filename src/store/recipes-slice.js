import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipe",
  initialState: {
    items: [],
    recipe: null,
    bookmarks: [],
  },
  reducers: {
    addRecipe(state, action) {
      state.items = action.payload;
    },
    addRecipeIngridients(state, action) {
      state.recipe = action.payload;
    },
    addBookmark(state, action) {
      let index;
      const hasAlreadyBookmark = state.bookmarks.some((bookmark, i) => {
        index = i;
        return bookmark.recipeId === action.payload.recipeId;
      });

      if (hasAlreadyBookmark) {
        state.bookmarks.splice(index, 1);
      } else {
        state.bookmarks.push(action.payload);
      }
    },
  },
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice;
