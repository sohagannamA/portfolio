import { createSlice } from "@reduxjs/toolkit";

const createThemeSlice = createSlice({
  name: "theme",
  initialState: { theme: localStorage.getItem("theme") || "dark" },
  reducers: {
    toggleDark: (state) => {
      (state.theme = "dark"), localStorage.setItem("theme", state.theme);
    },
    toggleBright: (state) => {
      (state.theme = "bright"), localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleDark, toggleBright } = createThemeSlice.actions;
export default createThemeSlice.reducer;
