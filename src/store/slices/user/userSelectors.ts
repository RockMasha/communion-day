import type { RootState } from "../../../types/store/RootState";

export const selectEmail = (state: RootState) => state.user.email;
export const selectToken = (state: RootState) => state.user.token;
export const selectLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectIsActivated = (state: RootState) => state.user.isActivated;
export const selectUserId= (state: RootState) => state.user.id;
