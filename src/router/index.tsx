import React, { lazy } from "react";
import Home from "@/pages/home";
import Loading from "@/pages/loading"
const About = lazy(() => import("@/pages/about"));

import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "@/pages/login/index";
import Layout from '@/layout/default'
import WithAuth from '@/pages/Auth/index'
import HooksPage from "@/pages/HooksPage";
import UseStatePage from "@/pages/UseStatePage";
import UseEffectPage from "@/pages/UseEffectPage";
import UseMemoPage from "@/pages/UseMemoPage";
import ReduxThunk from "@/pages/ReduxThunk";
import ReduxSaga from "@/pages/ReduxSaga";
import ReduxToolKit from "@/pages/ReduxToolKit";
import ReduxZustand from "@/pages/ReduxZustand";

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
    element: <WithAuth><Layout /></WithAuth>,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: withLoading(<About />) },
      { path: "hooks/useMemo", element:<UseMemoPage/>},
      { path: "hooks/useEffect", element:<UseEffectPage/> },
      { path: "hooks/useState", element:<UseStatePage/> },
      {
        path: '/redux/redux-thunk',
        element:<ReduxThunk/> 
      },
      {
        path: '/redux/redux-saga',
        element:<ReduxSaga/> 
      },
      {
        path: '/redux/toolkit',
        element:<ReduxToolKit/> 
      },
      {
        path: '/redux/zustand',
        element:<ReduxZustand/> 
      }
    ]
   },
   { path: "login", element:<Login /> },
   { path: "*", element: <Navigate to="/" replace={true} /> }
]

export default createBrowserRouter(routes);
