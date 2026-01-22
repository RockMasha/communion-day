import api from "./kyInstance";
import { ENDPOINTS } from "@/shared/consts/ENDPOINTS";

export async function activePoint() {
  try {
    const data = await api
      .patch(`${ENDPOINTS.user}`, { json: { isActivated: true } })
      .json();
    return data;
  } catch (error) {
    console.log("activePoint error", error);
    return {
      message: "some went wrong",
    };
  }
}
