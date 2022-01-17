import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({
  children,
}: {
  children: JSX.Element;
}): ReactElement {
  let location = useLocation();

  if (!localStorage.getItem("token")) {
    return <Navigate to="auth/signup" state={{ from: location }} replace />;
  }
  return children;
}
