import React from "react";

import Home from "../../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import { createBrowserRouter } from "react-router";
import Service from "../../Pages/Service/Service";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import WinterTips from "../../Components/WinterTips";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
      {
        path: "/wintertips",
        element: <WinterTips />
      },
    ],
  },
]);
