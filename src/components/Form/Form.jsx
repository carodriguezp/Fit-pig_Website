import PropTypes from "prop-types";

import Section from "./Section";
import GenderSection from "./genderSection";
import Button from './Button';

function Form({ inputHeight, setInputHeight, inputWeight, setInputWeight, handleGender, handleCalculate, handleReset, inputGender }) {
    return (
        <form>

            <Section inputValue={inputHeight} setInputValue={setInputHeight} inputName="height" placeholderText="170" valueUnit1="cm" valueUnit2="feet" />
            <Section inputValue={inputWeight} setInputValue={setInputWeight} inputName="weight" placeholderText="75" valueUnit1="kg" valueUnit2="lb" />

            <GenderSection handleGender={handleGender} inputGender={inputGender} />

            <div className="button">
                <Button buttonType="submit" handleFunction={handleCalculate} buttonText="Calculate" />
                <Button handleFunction={handleReset} buttonText="Reset" />
            </div>
        </form>
    )
}

export default Form

Form.propTypes = {
    inputHeight: PropTypes.string,
    setInputHeight: PropTypes.func,
    inputWeight: PropTypes.string,
    setInputWeight: PropTypes.func,
    inputGender: PropTypes.string,
    handleGender: PropTypes.func,

    handleCalculate: PropTypes.func,
    handleReset: PropTypes.func,
}

