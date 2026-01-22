import type { student } from "@/types";
import api from "./kyInstance";
import { ENDPOINTS } from "@/shared/consts/ENDPOINTS";

export async function getAllUser() {
  try {
    const data = await api.get(ENDPOINTS.user).json<student[]>();
    return data;
  } catch (error) {
    console.log("getAllUser error", error);
    return {
      message: "some went wrong",
    };
  }
}
