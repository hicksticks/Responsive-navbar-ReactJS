import React from 'react';
import Navbar from "./components/Navbar";
import { FooterContainer } from './containers/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaTwitter, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import Mani from './pages/mani'
import About from './pages/about'
import Multi from './pages/multi'
import FAQ from './pages/faq'
import Home from './pages/index'
import Background from './components/Background';
import ImageSlider from './ImageSlider';


function App() {
	const slides = [
		{ src: "http://localhost:3000/image-1.jpg", title: "beach" },
		{ url: "http://localhost:3000/image-2.jpg", title: "boat" },
		{ url: "http://localhost:3000/image-3.jpg", title: "forest" },
		{ url: "http://localhost:3000/image-4.jpg", title: "city" },
		{ url: "http://localhost:3000/image-5.jpg", title: "italy" },
	  ];
	  const containerStyles = {
		width: "500px",
		height: "280px",
		margin: "0 auto",
	  };
	
	
	return (
		
		<div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>


	);
{/*}
	<div class="wrap">	
	<Navbar/>
		<div className='social'>
			<h2>
				<a href='https://twitter.com/shibapoconk' rel="noreferrer" target='_blank'><FaTwitter /></a>&nbsp;&nbsp;
				<a href='https://discord.com/invite/F2WavCgFKj' rel="noreferrer" target='_blank'><FaDiscord /></a>&nbsp;&nbsp;
				<a href='https://t.me/CONKFTM' rel="noreferrer" target='_blank'><FaTelegramPlane /></a>&nbsp;&nbsp;
				<a href='mailto:team@conkme.com' rel="noreferrer" target='_blank'><AiFillMail /></a> 
			</h2></div>
<Router>
			<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/manifesto' element={<Mani />} />
			<Route path='/about' element={<About />} />
			<Route path='/multi' element={<Multi />} />
			<Route path='/faq' element={<FAQ />} />
			</Routes>
			</Router>

		<div className="app">
			<FooterContainer /> 
		</div>
		<Background></Background>		
		</div>
	*/}
	

}

export default App;
