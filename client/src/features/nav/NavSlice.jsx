import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const NavSlice = createSlice({
  name: "nav",
  initialState: {
    side:
      localStorage.getItem("side") === null
        ? "top"
        : localStorage.getItem("side"),
    resnav: false,
  },

  reducers: {
    setLeft: (state) => {
      state.side = "left";
      localStorage.setItem("side", state.side);
    },
    setRight: (state) => {
      state.side = "right";
      localStorage.setItem("side", state.side);
    },
    setBottom: (state) => {
      state.side = "bottom";
      localStorage.setItem("side", state.side);
    },
    setTop: (state) => {
      state.side = "top";
      localStorage.setItem("side", state.side);
    },
    toggleham: (state, action) => {
      state.resnav = action.payload;
    },
  },
});

export const { setTop, setLeft, toggleham, setRight, setBottom } =
  NavSlice.actions;
export default NavSlice.reducer;
