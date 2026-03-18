
import { useSelector } from "react-redux";
import HomeHeader from "./landingpage/HomeHeader/HomeHeader";
import Footer from "./landingpage/footer/footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  
    return (
  <div className="w-full flex flex-col" >
    
  <HomeHeader></HomeHeader>
  <Outlet></Outlet>
<Footer></Footer>
    </div>
  );
}

export default App;

