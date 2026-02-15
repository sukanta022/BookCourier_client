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
import BookForm from "../Pages/Dashboard/Librarian/BookForm";
import BookList from "../Pages/Dashboard/Librarian/BookList";
import BookUpdate from "../Pages/Dashboard/Librarian/BookUpdate";
import BrowseBooks from "../Pages/Browse/BrowseBooks";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Pages/Browse/BookDetails";
import Cart from "../Pages/Dashboard/users/Cart";
import PaymentSuccess from "../Pages/Dashboard/users/PaymentSuccess";
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
            },
            {
                path: '/browse_books',
                element: <PrivateRoute><BrowseBooks></BrowseBooks></PrivateRoute>
            },
            {
                path: '/browse_book/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
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
            },
            {
                path: '/Dashboard/Add_books',
                Component: BookForm
            },
            {
                path: '/Dashboard/All_books',
                Component: BookList
            },
            {
                path: '/Dashboard/update-book',
                Component: BookUpdate
            },
            {
                path: '/Dashboard/carts',
                Component: Cart
            },
            {
                path: "/Dashboard/payment-success",
                Component: PaymentSuccess
            }
        ]
    }

]);