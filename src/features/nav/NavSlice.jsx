import { createSlice } from "@reduxjs/toolkit";


const NavSlice = createSlice({
  name: "nav",
  initialState: {
    side:
      localStorage.getItem("side") === null
        ? "top"
        : localStorage.getItem("side"),
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
  },
});

export const { setTop, setLeft, setRight, setBottom } = NavSlice.actions;
export default NavSlice.reducer;
