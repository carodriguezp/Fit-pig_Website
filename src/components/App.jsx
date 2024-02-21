import '../style/App.scss'

import Form from './Form/Form';
import Pig from './Pig';

import Footer from './Footer';
import { useState } from 'react';

//import PropTypes from "prop-types";




function App() {

  //VARIABLES DE ESTADO

  const [inputHeight, setInputHeight] = useState("");

  //FUNCIONES



  // const handleCalculate = (){

  // };

  // const handleReset = (){

  // };


  return (
    <div className='container'>
      <h1>Fit Pig</h1>
      <h2>BMI Calculator</h2>


      <Form setInputHeight={setInputHeight} inputHeight={inputHeight} />
      <Pig />



      <Footer />
    </div>
  );
}

export default App
