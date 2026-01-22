import type { RouteWithId, RouteWithoutId } from "@/types";
import { ROUTES } from "../consts/ROUTES";

type GetRoute = {
  (route: RouteWithoutId): string;
  (route: RouteWithId, id: number): string;
};

export const getRoute: GetRoute = (route, id?) => {
  const point = ROUTES[route];

  if (point.includes(":id")) {
    return point.replace(":id", String(id));
  }

  return `/${point}`;
};
