import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Styles from "./navbar.module.css"


function Navbar() {
    return(
        <nav className={Styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
            <Search placeholder="search a song of your choice"/>
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;