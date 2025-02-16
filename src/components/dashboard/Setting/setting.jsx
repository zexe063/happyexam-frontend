
import { useSelector,useDispatch} from "react-redux";
import { ToggleSetting } from "../../../happyexamReducer/auth";

function Setting(){

    
    const user = useSelector((state)=>state.auth.user);
    console.log(user)
    const dispatch = useDispatch()
    



    return(
    <div className=" transition-all  duration-100  ease-in-out absolute top-[60px]   h-[200px] right-5 md:right-0 w-[300px] py-5 border-[2px] border-solid border-border_grey  shadow-setting_shadow rounded-lg z-1000  bg-white"  >

    <div className=" px-5 font-Nunito tetx-[20px] font-medium h-full flex  justify-between flex-col gap-2">
        
<p className=" w-full py-2 border-b-[1px] border-solid border-border_grey">Account</p>

  <div className="  flex  justify-between py-4 border-b-[1px] border-solid border-border_grey ">
<p>{user.language === "english" ? "English" : "हिन्दी"}</p>

<select  className=" w-[100px] h-[30px] rounded-lg  border-none   bg-toggle_grey  shadow-toggle_grey_shadow " onChange={(e)=>dispatch(ToggleSetting(e.target.value))}>
    <option value="english">english</option>
<option value="हिन्दी">हिन्दी</option>
</select>
  </div>

  <p>Help</p>

 </div>
  
    </div>
    // parent div
    )
}
export default Setting