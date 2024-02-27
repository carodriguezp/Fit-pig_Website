import '../style/App.scss'

import Form from './Form/Form';
import Pig from './Pig/Pig';

import Footer from './Footer';
import { useState } from 'react';


//import PropTypes from "prop-types";




function App() {

  //VARIABLES DE ESTADO

  const [inputHeight, setInputHeight] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  const [inputGender, setInputGender] = useState("male");
  const [bmi, setBmi] = useState(0);


  //FUNCIONES
  const handleGender = (value) => {
    setInputGender(value)
  }


  const calculateBmi = (event) => {

    event.preventDefault()



    const bmiResult = inputWeight / (((inputHeight / 100)) ** 2);

    setBmi(bmiResult.toFixed(2))

  };

  const handleReset = () => {

  };


  return (
    <div className='container'>
      <h1>Fit Pig</h1>
      <h2>Even if you feel fat, you can be fit</h2>
      <h3>BMI Calculator</h3>


      <Form setInputHeight={setInputHeight} inputHeight={inputHeight} setInputWeight={setInputWeight} inputWeight={inputWeight} handleGender={handleGender} handleCalculate={calculateBmi} handleReset={handleReset} inputGender={inputGender} />



      <Pig />



      <Footer />
    </div>
  );
}

export default App
