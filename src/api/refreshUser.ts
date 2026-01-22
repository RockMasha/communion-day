import { createAsyncThunk } from "@reduxjs/toolkit";
import { handelAppError } from "@/shared/helpers/handelAppError";
import { ENDPOINTS } from "@/shared/consts/ENDPOINTS";
import type { responceUser, RootState } from "@/types";
import api from "./kyInstance";

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState() as RootState;
      const token = state.user.token;
      if (!token) {
        return thunkApi.rejectWithValue({ message: "No have token" });
      }
      const answer = await api.get(ENDPOINTS.refresh).json<responceUser>();
      return answer;
    } catch (error) {
      console.log("refreshUser error", error);
      const payload = await handelAppError(error);
      return thunkApi.rejectWithValue(payload);
    }
  },
);
