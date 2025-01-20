import App from "../App.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import {createBrowserRouter} from "react-router";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: 'users', element: <UsersPage/>}
        ]
    }
]);
