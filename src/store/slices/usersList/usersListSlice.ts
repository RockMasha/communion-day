import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { responceUser } from "../../../types/user/responceUser";
import { loginUser } from "../../../api/loginUser";
import { refreshUser } from "../../../api/refreshUser";

type UserPoint = responceUser | { left: string; top: string };
type UserSliceState = UserPoint[];

const initialState: UserSliceState = [];

const usersList = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state: typeof initialState) => {};

    const handleRejected = (state: typeof initialState) => {};

    const handleAuthFulfilled = (
      state: typeof initialState,
      action: PayloadAction<responceUser[]>,
    ) => {
        
    };

    const handleUpdateFulfilled = (
      state: typeof initialState,
      action: PayloadAction<responceUser[]>,
    ) => {};

    builder
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleAuthFulfilled)
      .addCase(loginUser.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleUpdateFulfilled)
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
