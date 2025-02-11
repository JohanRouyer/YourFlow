import styles from "./Navbar.module.css";
import {getImageUrl} from "../utils.js";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">YourFlow</a>
            <img src={getImageUrl("Nav/logo.svg")} alt="logo YourFlow" className={styles.logo}/>
        </nav>
    );
};
