import styles from "./Header.module.css"
import { Link, useLocation } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";


function Header() {

    const data = useLocation()
    console.log(data);
    

    const [menuNav, setMenuNav] = useState({
        padding: `0`,
        width: "0",
    })

    const [closeMenu, setCloseMenu] = useState({
        display: "none"
    })

    const [windowSize, setWindowSize] = useState()

    function handleMenu() {
        setMenuNav({
            padding: `0`,
            width: "0",
        });
        setCloseMenu({
            display: "none",
        })
        
    }

    function clickMenu(){
        if(window.innerWidth < 500){
            setMenuNav({
                padding: `10px 50px`,
                width: "100%",
            });
        }else{
            setMenuNav({
                padding: `10px 50px`,
                width: "500px",
            });
        }

        setCloseMenu({
            display: "flex",
        });
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
          }, { passive: false });
        
    }


    return <header className={styles.header}>
        <div className={styles.headerchild}>
            <div className={styles.headerleft}>
                <Link to="/" >Brilio.</Link>
            </div>
            <div className={styles.headerright}>
                <Link to="/" style={data.pathname == "/" ? {color:"#a6abb44e"} : {color: "white"}} >Home</Link>
                <Link to="/works" style={data.pathname == "/works" ? {color:"#a6abb44e"} : {color: "white"}}> Works</Link>
                <Link to="/about" style={data.pathname == "/about" ? {color:"#a6abb44e"} : {color: "white"}}>About</Link>
                <Link to="/contact" style={data.pathname == "/contact" ? {color:"#a6abb44e"} : {color: "white"}}>Contact</Link>
            </div>
            <button onClick={clickMenu} className={styles.Menu}>Menu</button>
        </div>
        <div className={styles.menudiv} style={menuNav}>
            <div className={styles.navi}>
                <div className={styles.navititle}>Navigation</div>
                <button onClick={handleMenu} className={styles.naviX} style={closeMenu}><AiOutlineClose className={styles.xicon} /></button>
            </div>
            <div onClick={handleMenu} className={styles.navicontent}>
                <Link to="/" style={data.pathname == "/" ? {color:"#a6abb44e"} : {color: "white"}}>Home</Link>
                <Link to="/works" style={data.pathname == "/works" ? {color:"#a6abb44e"} : {color: "white"}}>Works</Link>
                <Link to="/about" style={data.pathname == "/about" ? {color:"#a6abb44e"} : {color: "white"}}>About</Link>
                <Link to="/contact" style={data.pathname == "/contact" ? {color:"#a6abb44e"} : {color: "white"}}>Contact</Link>
            </div>
            <div className={styles.navisocialstext}>Socials</div>
            <div className={styles.navisocials}>
                <Link to={"https://www.instagram.com/e_mmmdv/"} >Instagram <HiArrowUpRight /> </Link>
                <Link to={"https://www.behance.net/emmmdv"} >Behance <HiArrowUpRight /></Link>
                <Link to={"https://www.linkedin.com/home?originalSubdomain=tr"}>Linkedin <HiArrowUpRight /></Link>
            </div>
        </div>
    </header>
}

export default Header;