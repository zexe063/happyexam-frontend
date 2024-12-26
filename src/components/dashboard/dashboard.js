import { Outlet } from "react-router-dom";
import Header from "../header/header";




function Dashboard(){
    return(
        <div className=" w-full h-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Dashboard;