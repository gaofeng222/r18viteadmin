import React, { lazy } from "react";
import Home from "@/pages/home";
import Loading from "@/pages/loading"
// import About from "@/pages/about";

const About = lazy(() => import("@/pages/about"));

import { Navigate } from "react-router-dom";

const withLoading = (Component:JSX.Element) => {
  return (
    <React.Suspense fallback={<Loading />}>
      { Component }
    </React.Suspense>
  );
}
const router = [
  { path: "/", element: <Navigate to='/home' /> },
  { path: "home", element: <Home /> },
  { path: "about", element: withLoading(<About />) },
  { path: "*", element: <Navigate to="/" replace={true} /> }
];
export default router;
