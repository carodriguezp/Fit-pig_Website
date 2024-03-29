import PropTypes from "prop-types";

function PigResult({ bmi, bmiText }) {

    return (
        <section className="pigResult">
            <h3>Your BMI is {bmi}</h3>

            <p>{bmiText}</p>
        </section>
    )
}

export default PigResult


PigResult.propTypes = {

    bmi: PropTypes.number,
    bmiText: PropTypes.string,
}