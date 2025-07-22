import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/ThemeSlice"
import NavSide from "../features/nav/NavSlice"

const rootReducer = combineReducers({
    theme:themeReducer,
    nav:NavSide
})

const store = configureStore({
    reducer:rootReducer
});

export default store;
