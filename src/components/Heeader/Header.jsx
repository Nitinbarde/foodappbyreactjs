import React from "react";
import styles from "./Header.module.css"

const Header = () =>{
    return <div className={styles.headerContainer}>

    <div className={styles.menuContainer}>
     <div className={styles.menuItem}>Index</div>
     <div className={styles.menuItem}>Food</div>
     <div className={styles.menuItem}>About</div>

    </div>
    </div>
}

export default Header;