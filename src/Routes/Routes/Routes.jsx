import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Authentication/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/appointment',
                element:<Appointment></Appointment>
            }
        ]
    },
]);