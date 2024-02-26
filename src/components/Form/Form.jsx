import PropTypes from "prop-types";

// import Button from './Button';
import Section from "./Section";
import GenderSection from "./genderSection";

function Form({ inputHeight, setInputHeight, inputWeight, setInputWeight, handleGender }) {
    return (
        <form>

            <Section inputValue={inputHeight} setInputValue={setInputHeight} inputName="height" placeholderText="170" valueUnit1="cm" valueUnit2="feet" />
            <Section inputValue={inputWeight} setInputValue={setInputWeight} inputName="weight" placeholderText="75" valueUnit1="kg" valueUnit2="lb" />

            <GenderSection handleGender={handleGender} />

            {/* <Button />
            <Button /> */}

        </form>
    )
}

export default Form

Form.propTypes = {
    inputHeight: PropTypes.string,
    setInputHeight: PropTypes.func,
    inputWeight: PropTypes.string,
    setInputWeight: PropTypes.func,
    handleGender: PropTypes.func,

    handleReset: PropTypes.func,
}

