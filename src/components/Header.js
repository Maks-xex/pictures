import React from "react";
import logo from "../assets/png/logo.png";

export const Header = () => (
	<header>
		<h1 className='v-hidden'>Avito</h1>
		<img src={logo} width='75px' />
	</header>
);
