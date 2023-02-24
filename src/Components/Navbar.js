import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import homeStore from "../stores/homeStore";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const store = homeStore() 

	React.useEffect(()=> {
		store.fetchCoins()
	}, [])
  
	const styles = {
	  color: store.coins.colour,
   }	

	return (
		<header>
			<nav1>
			<a href="/">
				<img src={require('../CONK_LOGO.png')} style={{wdith: 100, width: 100}} alt='logo' />
			</a>
			</nav1>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/manifesto">Story</a>
				<a href="/about">About</a>
				<a href="/faq">FAQ</a>
				<a href=""></a><a href=""></a><a href=""></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<p><a href="https://dexscreener.com/fantom/0x4707eed23f628de1a032235158e33bc3c9fcf2f4000100000000000000000661-0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83-0xb715f8dce2f0e9b894c753711bd55ee3c04dca4e" target="_blank">$conk:</a> {store.coins.price} <font style={styles}>({store.coins.h24}%)</font></p>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
