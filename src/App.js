
import HomeHeader from "./landingpage/HomeHeader/HomeHeader";
import Footer from "./landingpage/footer/footer";
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <div className=" w-full h-full" >
  <HomeHeader></HomeHeader>
 
<main className=" flex-grow">
  <Outlet></Outlet>
</main>

<Footer></Footer>
    </div>
  );
}

export default App;

