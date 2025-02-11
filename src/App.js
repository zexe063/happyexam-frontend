
import { useSelector } from "react-redux";
import HomeHeader from "./landingpage/HomeHeader/HomeHeader";
import Footer from "./landingpage/footer/footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  const store = useSelector((state)=>state.happyexam);

    return (
    <div className=" w-full h-full" >
<Toaster></Toaster>
  <HomeHeader></HomeHeader>
 
<main className=" flex-grow">
  <Outlet></Outlet>
</main>

<Footer></Footer>
    </div>
  );
}

export default App;

