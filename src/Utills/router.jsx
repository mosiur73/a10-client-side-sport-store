import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout/MainLayout";
import Home from "../component/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";


const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<SignUp></SignUp>
            }
        ]
        
    }
])

export default router;