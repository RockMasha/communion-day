import type { RootState } from "@/types";

export const selectActivePoint = (state: RootState) => state.activePoint.activePointId;