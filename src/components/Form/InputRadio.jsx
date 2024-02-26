import PropTypes from "prop-types";

function InputRadio({ genderValue, radioText, handleGender }) {

    const handleRadio = (ev) => {
        handleGender(ev.target.value)

    }

    return (
        <>
            <label htmlFor="">{radioText}</label>
            <input type="radio" name="gender" value={genderValue} onChange={handleRadio} />

        </>

    )
}

export default InputRadio

InputRadio.propTypes = {
    genderValue: PropTypes.string,
    radioText: PropTypes.string,
    handleGender: PropTypes.string
}