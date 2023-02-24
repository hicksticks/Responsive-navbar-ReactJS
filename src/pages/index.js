import React from 'react';
import ImageSlider from '../ImageSlider';
import Cards from './cards';
import NewFTM from './newftm';

const Home = () => {

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach", link: "" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat", link: "" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest", link: "" },
    { url: "http://localhost:3000/image-4.jpg", title: "city", link: "" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy", link: "" },
  ];

  const containerStyles = {
    width: "600px",
    height: "320px",
    margin: "0 auto",
  };


  return (
    <div>
      <br></br><br></br>
      <center>
      <h1>Latest CONK News</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <br></br><br></br>
      <Cards></Cards>
      <NewFTM></NewFTM>
      </center>
    </div>
    
  );
};

export default Home;
