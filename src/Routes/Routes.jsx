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
import LibrarianInvoice from "../Pages/Dashboard/Librarian/LibrarianInvoice";
import AdminRoute from "./AdminRoute";
import LibrarianRoute from "./LibrarianRoute";
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
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/Dashboard/Profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/Dashboard/Users',
                element: <AdminRoute><UserList></UserList></AdminRoute>
            },
            {
                path: '/Dashboard/Add_books',
                element: <LibrarianRoute><BookForm></BookForm></LibrarianRoute>
            },
            {
                path: '/Dashboard/All_books',
                element: <PrivateRoute><BookList></BookList></PrivateRoute>
            },
            {
                path: '/Dashboard/update-book',
                element: <PrivateRoute><BookUpdate></BookUpdate></PrivateRoute>
            },
            {
                path: '/Dashboard/carts',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "/Dashboard/payment-success",
                element: <PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>
            },
            {
                path: "/Dashboard/LibrarianInvoice",
                element: <LibrarianRoute><LibrarianInvoice></LibrarianInvoice></LibrarianRoute>
            }
        ]
    }

]);