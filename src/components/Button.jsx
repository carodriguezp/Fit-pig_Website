import PropTypes from "prop-types";

function Button({ handleCalculate, handleReset }) {
    return (

        <section className="button">
            <button className="button-calculate" type="submit" onClick={handleCalculate}>
                Calculate
            </button>

            <button className="button-reset" onClick={handleReset}>
                Reset
            </button>
        </section>

    )
}

export default Button

Button.propTypes = {

    handleCalculate: PropTypes.func,
    handleReset: PropTypes.func,

}