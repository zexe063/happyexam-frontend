
import toast from "react-hot-toast"
import { MdError } from "react-icons/md";

export const toastSucess = (message , position)=>{
    toast.success(message, {
        position: position || "bottom-center" ,
         style:{
            backgroundColor:"#15b441",
            color:'white',
            fontSize:"14"
         },
         iconTheme:{
            primary:"white",
            secondary:"#15b441"
            
         }
        
    })
} 



export const toastError = (message, position)=>{
    toast.error(message,{
        position: position || "bottom-center",
        style:{
            backgroundColor:"#ef4444",
            color:"white",
            fontSizet:"14"
        },
        iconTheme:{
            primary:"white",
            secondary:"#ef4444"
        },
        icon:<MdError  size={20}/>
    })
}
