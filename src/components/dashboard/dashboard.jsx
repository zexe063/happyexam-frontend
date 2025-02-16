import { Outlet } from "react-router-dom";
import Header from "./header/header";


import { Toaster } from "react-hot-toast";

function Dashboard(){
    return(
        <div className=" relative w-full h-full">
            <Header></Header>
         <Toaster></Toaster>
            <div  className=" relative">
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard;