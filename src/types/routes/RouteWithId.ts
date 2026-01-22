import type { ROUTES } from "@/shared/consts/ROUTES";
import type { Routes } from "./Routes";

export type RouteWithId = {
  [K in Routes]: (typeof ROUTES)[K] extends `${infer _Start}:id${infer _End}`
    ? K
    : never;
}[Routes];
