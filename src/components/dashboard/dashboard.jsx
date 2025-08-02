import { Outlet } from "react-router-dom";
import Header from "./header/header";


import { Toaster } from "react-hot-toast";

function Dashboard(){
    return(
        <div className=" relative w-full h-[100vh]">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Dashboard;