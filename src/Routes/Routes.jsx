import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import HomePage from "../Pages/Dashboard/users/HomePage";
import MyOrders from "../Pages/Dashboard/users/MyOrders";
import MyProfile from "../Pages/Dashboard/users/MyProfile";
import UserList from "../Pages/Dashboard/Admin/UserList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/login',
            Component: Login
        }
    ]
  },
  {
    path: "/Dashboard",
    Component: DashboardLayout,
    children: [
        {
            index: true,
            Component: HomePage
        },
        {
            path: '/Dashboard/MyOrders',
            Component: MyOrders
        },
        {
            path: '/Dashboard/Profile',
            Component: MyProfile
        },
        {
            path: '/Dashboard/Users',
            Component: UserList
        }
    ]
  }
  
]);