import { useSelector } from "react-redux"


function ProtectedRoute({children}){
    const  user = useSelector((state)=>state.auth.user);
    if(!user._id) return window.location.href="/";
    
    return (
        <>
        {children}
        </>
    )
}

export default ProtectedRoute