import React from "react";
import logo from "/logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<img src={logo} />
			<h2>Meme Generator</h2>
			<h3>React Course - Project 3</h3>
		</nav>
	);
}

export default Navbar;
