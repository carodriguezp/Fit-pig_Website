import PropTypes from "prop-types";
import InputRadio from "./InputRadio"

function GenderSection({ handleGender, inputGender }) {



    return (
        <section className="form-section-radio">
            <label className="form-section-label hover" htmlFor="">Select your gender:</label>


            <InputRadio radioText="Female" genderValue="female" handleGender={handleGender} isChecked={inputGender === "female"} />
            <InputRadio radioText="Male" genderValue="male" handleGender={handleGender} isChecked={inputGender === "male"} />


        </section>

    )
}

export default GenderSection

GenderSection.propTypes = {

    handleGender: PropTypes.func,
    inputGender: PropTypes.string,
}
