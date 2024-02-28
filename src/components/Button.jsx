import PropTypes from "prop-types";

function Button({ buttonType, handleFunction, buttonText }) {
    return (

        <button className="button hover" type={buttonType} onClick={handleFunction}>
            {buttonText}
        </button>

    )
}


export default Button

Button.propTypes = {

    buttonType: PropTypes.string,
    handleFunction: PropTypes.func,
    buttonText: PropTypes.string,

}