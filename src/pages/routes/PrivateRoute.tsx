import { refreshUser } from "@/api/refreshUser";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/types";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import PageLoader from "@/components/modules/PageLoader/PageLoader";
import { getRoute } from "@/shared/helpers/getRoute";
import { Suspense, useEffect, useState } from "react";
import type { ComponentType } from "react";

interface PrivateRouteProps {
  redirect?: string;
  Component: ComponentType;
}

function PrivateRoute({
  redirect = getRoute("login"),
  Component,
}: PrivateRouteProps) {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(refreshUser())
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  if (isLoading) {
    return <PageLoader />;
  }

  return isLoggedIn ? (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  ) : (
    <Navigate to={redirect} />
  );
}

export default PrivateRoute;
