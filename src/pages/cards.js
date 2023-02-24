import React from 'react';
import './cards.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Liquidity Raising Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/infinite.PNG'
              text='Send some thanks to the community!'
              label='NFT Mint'
              path='https://conkthanks.typedream.app/mint'
            />
            <CardItem
              src='images/slim.PNG'
              text='CONK celebration NFT raffle!'
              label='Raffle'
              path='https://SlimJimmy420k.com'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
  </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;