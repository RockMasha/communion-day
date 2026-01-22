import { createAsyncThunk } from "@reduxjs/toolkit";
import type { responceUser } from "../types/user/responceUser";
import { handelAppError } from "@/shared/helpers/handelAppError";
import api from "./kyInstance";
import { ENDPOINTS } from "@/shared/consts/ENDPOINTS";

interface user {
  email: string;
  pass: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData: user, thunkApi) => {
    try {
      const answer = await api
        .post(ENDPOINTS.auth, { json: formData })
        .json<responceUser>();
      return answer;
    } catch (error) {
      console.log("loginUser error", error);
      const payload = handelAppError(error);
      return thunkApi.rejectWithValue(payload);
    }
  },
);
