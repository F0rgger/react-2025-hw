import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";


export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
    }
]);