import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";



function PublicRoute({children}){
    const user = useSelector((state)=>state.auth.user);
    if(user._id) return  <Navigate to="/home/10" replace />;

    return (
        <>
        {children}
        </>
    )
}

export default PublicRoute