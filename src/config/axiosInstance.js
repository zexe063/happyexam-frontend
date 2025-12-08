
import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})


 axiosInstance.interceptors.response.use(
    (response)=>({status:response.status, data:response.data}),
    (err)=>{
        return Promise.reject({
             status: err.status  || 0,
             data: err.response?.data || (err.code === "ERR_NETWORK" ? {sucess:false, message:"Network conncetion error"} : {sucess:false, message:"Something error occured"})
        })
    }
 )
export default axiosInstance;