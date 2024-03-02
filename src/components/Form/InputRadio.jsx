import PropTypes from "prop-types";

function InputRadio({ genderValue, radioText, handleGender, isChecked }) {

    const handleRadio = (ev) => {
        handleGender(ev.target.value)

    }

    return (
        <div className="form-section-radio-div">
            <label htmlFor="" className="form-section-radio-label hover">{radioText}</label>
            <input className="form-section-radio-input hover" type="radio" name="gender" value={genderValue} onChange={handleRadio} checked={isChecked} />

        </div>

    )
}

export default InputRadio

InputRadio.propTypes = {
    genderValue: PropTypes.string,
    radioText: PropTypes.string,
    handleGender: PropTypes.func,
    isChecked: PropTypes.bool
}