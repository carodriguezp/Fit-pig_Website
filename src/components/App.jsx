import '../style/App.scss'

import Form from './Form';
import Pig from './Pig';
import Button from './Button';
import Footer from './Footer';

//import PropTypes from "prop-types";

function App() {


  return (
    <>
      <h1>Fit Pig</h1>
      <h2>BMI Calculator</h2>


      <Form />
      <Pig />


      <Button />
      <Footer />
    </>
  );
}

export default App
