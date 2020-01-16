import React from "react";

import Logo from "./Logo/cyf-logo.png";
import { NavLink } from "react-router-dom";

import "./nav.style.css";
import Language from "../Language/Language";




const NavBar = () => (
	<>
		<nav className="navbar navbar-expand-lg">
			<NavLink to="/">
				<img className="logo" src={Logo} alt="logo" />
			</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse float-right" id="navbarNavDropdown">

			</div>
			<ul className="navbar-nav my-2 my-lg-0">

				<li className="nav-item ">
					<NavLink className="nav-link" to="/home">
      Home
					</NavLink>
				</li>
				<li className="nav-item ">
					<NavLink className="nav-link" to="/ourwork">
      Our Work
					</NavLink>
				</li>
				<li className="nav-item ">

					<NavLink className="nav-link" to="/about">
      About
					</NavLink>

				</li>
				<Language />
			</ul>
		</nav>
		<hr size="1" width="1400" color="red"></hr>

	</>
);

export default NavBar;

