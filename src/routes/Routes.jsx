import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Order from "../component/order";
import PrivetRoute from "./PrivetRoute";
import Profile from "../component/Profile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/signin",
            element: <Signin/>
        },
        {
            path:"/order",
            element: <PrivetRoute><Order/></PrivetRoute>
        },
        {
            path:"/profile",
            element: <PrivetRoute><Profile/></PrivetRoute>
        },
      ]
    },
  ]);

  export default router