import styles from "./Header.module.css"
import { Link } from "react-router-dom";

function Header() {
    return <header className={styles.header}>
        <div className={styles.headerchild}>
            <div className={styles.headerleft}>
                <Link to="/" >Brilio.</Link>
            </div>
            <div className={styles.headerright}>
                <Link to="/" >Home</Link>
                <Link to="/works" >Works</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
            </div>
        </div>
    </header>
}

export default Header;