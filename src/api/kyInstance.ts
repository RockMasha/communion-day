import type { RootState } from "@/types";
import ky, { type KyRequest } from "ky";

const API_URL = import.meta.env.VITE_API_BASE_URL;

let getReduxState: (() => RootState) | null = null;

export const initKyWithStore = (getStateFunc: () => RootState) => {
  getReduxState = getStateFunc;
};

const api = ky.create({
  prefixUrl: API_URL,
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
  timeout: 10000,
  hooks: {
    beforeRequest: [
      (request) => {
        setTokenToRequest(request);
        return request;
      },
    ],
  },
});

function setTokenToRequest(request: KyRequest) {
  if (getReduxState) {
    const state = getReduxState();
    const token = state.user.token;
    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    }
  }
}

export default api;
