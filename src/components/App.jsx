import '../style/App.scss'
import Footer from './Footer';
import Form from './Form';
import Pig from './Pig';

//import PropTypes from "prop-types";

function App() {


  return (
    <>
      <h1>Fit Pig</h1>
      <h2>BMI Calculator</h2>


      <Form />
      <Pig />

      <Footer />
    </>
  );
}

export default App
