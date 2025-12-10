import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../../MainLayout";
import Home from "../pages/home/Home";
import ContactUs from "../pages/ContactUs";
import Affiliate from "../pages/affilate/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "contact",
        element: <ContactUs />, // ✅ هنا بتتعرض الصفحة داخل MainLayout
      },
      {
        path: "affiliate",
        element: <Affiliate />, // ✅ هنا بتتعرض الصفحة داخل MainLayout
      },
    ],
  },
]);
