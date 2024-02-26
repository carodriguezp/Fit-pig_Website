import PropTypes from "prop-types";

function InputText({ labelText, name, placeholder, value, handleInput }) {
    return (
        <>

            <label htmlFor={name}>{labelText}</label>
            <input type="text" name={name} placeholder={placeholder} value={value} onChange={(ev) => handleInput(ev.target.value)} />

        </>
    )
}

export default InputText

InputText.propTypes = {

    labelText: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleInput: PropTypes.func,
}