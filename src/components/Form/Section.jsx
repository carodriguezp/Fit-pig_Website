import InputText from './InputText';
import InputSelect from './InputSelect';
import PropTypes from "prop-types";

function Section({ inputValue, setInputValue, inputName, placeholderText, valueUnit1, valueUnit2 }) {
    return (
        <>
            <section>
                <InputText labelText={`Write your ${inputName}`} name={inputName} placeholder={placeholderText} value={inputValue} handleInput={setInputValue} />

                <InputSelect valueUnit1={valueUnit1} valueUnit2={valueUnit2} />
            </section>


        </>
    )
}

export default Section

Section.propTypes = {

    inputValue: PropTypes.string,
    setInputValue: PropTypes.func,
    inputName: PropTypes.string,
    placeholderText: PropTypes.string,
    valueUnit1: PropTypes.string,
    valueUnit2: PropTypes.string,

}
