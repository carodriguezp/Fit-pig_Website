import PropTypes from "prop-types";

// import Button from './Button';
import Section from "./Section";

function Form({ setInputHeight, inputHeight }) {
    return (
        <form>

            <Section inputHeight={inputHeight} setInputHeight={setInputHeight} />

            {/* <Button />
            <Button /> */}

        </form>
    )
}

export default Form

Form.propTypes = {

    setInputHeight: PropTypes.func,
    handleReset: PropTypes.func,
    inputHeight: PropTypes.string
}

