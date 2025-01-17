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
import ImageSlider from "./ImageSlider";
import Cards from './pages/cards';


const App = () => {

return (
	<div>	
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
			<Route path='/cards' element={<Cards />} />
			</Routes>
			</Router>

		<div className="app">
			<FooterContainer /> 
		</div>
		
    </div>
)
//<Background></Background>		
};

export default App;