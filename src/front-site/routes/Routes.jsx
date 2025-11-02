import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../../AppWrapper";

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <Navigate to='/home'/>
        }
    ]
}])