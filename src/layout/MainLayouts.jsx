import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const MainLayouts = () => {
    return (
        <>
         <NavBar/>
         {/* Navbar */} 

<div className="min-h-[calc(100vh-310px)]">
         <Outlet/>
</div>
         {/* outlet */}

         <Footer/>
         {/* Footer */}  
        </>
    );
};

export default MainLayouts;