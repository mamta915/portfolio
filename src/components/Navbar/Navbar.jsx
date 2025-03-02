import { useState } from "react";
import styles from "./Navbar.module.css";



const Navbar = () => {
    const [menuOpen, setMenuopen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                {/* <img className={styles.menubtn} src={getImageUrl("nav/menuIcon.png")} alt="imgicon" /> */}

                <img className={styles.menuBtn} src={menuOpen
                    ? ('../../../assets/nav/closeIcon.png')
                    : ('../../../assets/nav/menuIcon.png')
                }
                    onClick={() => setMenuopen(!menuOpen)}
                    alt="menubtn"></img>

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuopen(false)}>
                    <li><a href="#about">About</a>  </li>
                    <li><a href="#experience">Experience</a> </li>
                    <li><a href="#project">Projects</a>  </li>
                    <li><a href="#contact">Contact</a>  </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
