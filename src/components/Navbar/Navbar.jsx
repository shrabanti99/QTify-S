import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./navbar.module.css"


function Navbar() {
    return(
        <>
        <div className={styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
            <Search placeholder="Search a song of your choice"/>
            <Button>Give Feedback</Button>
        </div>
        </>
    )
}

export default Navbar;