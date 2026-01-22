import api from "./kyInstance";
import { ENDPOINTS } from "@/shared/consts/ENDPOINTS";

export async function getStudent(id: string) {
  try {
    const data = await api.get(`${ENDPOINTS.user}/${id}`).json();
    return data;
  } catch (error) {
    console.log("getStudent error", error);
    return {
      message: "some went wrong",
    };
  }
}
