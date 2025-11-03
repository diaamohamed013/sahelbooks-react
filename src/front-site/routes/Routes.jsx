import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../../MainLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
            },
            {
                path: 'home',
                element: <Home />, // ✅ هنا بتتعرض الصفحة داخل MainLayout
            }
        ]
    }
]);
