import React from 'react';
import Accordion from '../components/accordion/Accordion';
import '../components/accordion/styles/accordion.css';

const FAQ = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
     }}
    > 
      <Accordion />
    </div>
  );
};

export default FAQ;
