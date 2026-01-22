import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { responceUser } from "../../../types/user/responceUser";
import { loginUser } from "../../../api/loginUser";
import { refreshUser } from "../../../api/refreshUser";

interface UserSliceState {
  email: string | null;
  token: string | null;
  id: number | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isActivated: boolean;
}

const initialState: UserSliceState = {
  email: null,
  isActivated: false,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state: typeof initialState) => {
      state.isLoading = true;
    };

    const handleRejected = (state: typeof initialState) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    };

    const handleAuthFulfilled = (
      state: typeof initialState,
      action: PayloadAction<responceUser>,
    ) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.email = action.payload.student.email;
      state.token = action.payload.access_token;
      state.isActivated = action.payload.student.isActivated;
      state.id = action.payload.student.id;
    };

    const handleUpdateFulfilled = (
      state: typeof initialState,
      action: PayloadAction<responceUser>,
    ) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.email = action.payload.student.email;
      state.isActivated = action.payload.student.isActivated;
      state.id = action.payload.student.id;
    };

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
