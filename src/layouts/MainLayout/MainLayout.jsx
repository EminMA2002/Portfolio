import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function MainLayout(){
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

export default MainLayout;