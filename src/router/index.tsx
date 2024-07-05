import React, { lazy } from "react";
import Home from "@/pages/home";
import Loading from "@/pages/loading"
// import About from "@/pages/about";

const About = lazy(() => import("@/pages/about"));

import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login/index";
import Layout from '@/layout/default'

const withLoading = (Component:JSX.Element) => {
  return (
    <React.Suspense fallback={<Loading />}>
      { Component }
    </React.Suspense>
  );
}
//路由的类型声明
export const routes = [
  { path: "/", 
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: withLoading(<About />) },
    
    ]
   },
   { path: "login", element:<Login /> },
   { path: "*", element: <Navigate to="/" replace={true} /> }
]

export default createBrowserRouter(routes);
