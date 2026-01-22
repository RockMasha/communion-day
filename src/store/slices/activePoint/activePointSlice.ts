import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface activePointState {
  activePointId: string | null;
}

const initialState: activePointState = {
  activePointId: null,
};

const activePointSlice = createSlice({
  name: "activePoint",
  initialState,
  reducers: {
    setActivePoint: (state, action: PayloadAction<string>) => {
      state.activePointId = action.payload;
    },
  },
});

export const { setActivePoint } = activePointSlice.actions;

export const activePointReducer = activePointSlice.reducer;
