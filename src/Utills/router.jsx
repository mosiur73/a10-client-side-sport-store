import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout/MainLayout";
import Home from "../component/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";
import AddEquipment from "../component/AddEquipment/AddEquipment";
import AllEquipment from "../component/AllEquipment/AllEquipment";
import UpdateEuipment from "../component/UpdateEquipment/UpdateEuipment";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import MyEquipment from "../component/MyEquipment/MyEquipment";
import Details from "../component/Details/Details";


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
            },
            {
                path:"/addequipment",
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path:"/allequipment",
                element:<AllEquipment></AllEquipment>,
                loader:()=>fetch('http://localhost:5000/sports')
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><UpdateEuipment></UpdateEuipment></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/sports/${params.id}`)
            },
            {
                path:"/myequipment",
                element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/sports')
            },
            {
                path:"/details/:id",
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/sports/${params.id}`)
                    
                
            }
           
        ]
        
    }
])

export default router;