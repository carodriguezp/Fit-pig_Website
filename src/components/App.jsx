import '../style/App.scss'

import Header from './Header';
import Form from './Form/Form';
import { bmiRanges } from '../BmiRanges';
import PigResult from './Pig/PigResult';
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
  const [bmiText, setBmiText] = useState("");


  //FUNCIONES
  const handleGender = (value) => {
    setInputGender(value)
  }


  const calculateBmi = (event) => {

    event.preventDefault()

    const bmiResult = (inputWeight / (((inputHeight / 100)) ** 2)).toFixed(1);

    setBmi(Number(bmiResult))

    if (bmiResult < 18.5) {
      setBmiText(bmiRanges.underweight)
    } else if (18.5 < bmiResult && bmiResult < 24.9) {
      setBmiText(bmiRanges.healthyWeight)
    } else if (25 < bmiResult && bmiResult < 29.9) {
      setBmiText(bmiRanges.overweight)
    } else if (30 < bmiResult && bmiResult < 34.9) {
      setBmiText(bmiRanges.obesity1)
    } else if (35 < bmiResult && bmiResult < 39.9) {
      setBmiText(bmiRanges.obesity2)
    } else if (40 < bmiResult) {
      setBmiText(bmiRanges.obesity3)
    }

  };

  const handleReset = (event) => {
    event.preventDefault()
    setInputHeight("");
    setInputWeight("");
    setInputGender("male");
    setBmi(0);
    setBmiText("");
  };


  return (
    <div className='container'>

      <Header />

      <section className='container__section'>
        <Form setInputHeight={setInputHeight} inputHeight={inputHeight} setInputWeight={setInputWeight} inputWeight={inputWeight} handleGender={handleGender} handleCalculate={calculateBmi} handleReset={handleReset} inputGender={inputGender} />

        <div className='container__section-pig_div'>
          {bmiText && <PigResult bmi={bmi} bmiText={bmiText} />} {/*binary operator */}
          <Pig bmi={bmi} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App
