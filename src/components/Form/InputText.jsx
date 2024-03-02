import PropTypes from "prop-types";

function InputText({ labelText, name, placeholder, value, handleInput }) {
    //valiadacion de los inputs

    //variable de estado

    //condicional numero positivo, de 3 cifras que sean números

    return (
        <>

            <label htmlFor={name} className="form-section-label hover">{labelText}</label>
            <input type="text" className=" form-section-input hover" name={name} placeholder={placeholder} value={value} onChange={(ev) => handleInput(ev.target.value)} />

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