import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import recipesSlice from "./recipes-slice";
import logger from "redux-logger"
const store = configureStore({
    reducer: { recipe: recipesSlice.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;