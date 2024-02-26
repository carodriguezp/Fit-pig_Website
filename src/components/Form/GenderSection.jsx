import PropTypes from "prop-types";
import InputRadio from "./InputRadio"

function GenderSection({ handleGender }) {



    return (
        <section>
            <label htmlFor="">Select your gender</label>


            <InputRadio radioText="Female" genderValue="female" handleGender={handleGender} />
            <InputRadio radioText="Male" genderValue="male" handleGender={handleGender} />


        </section>

    )
}

export default GenderSection

GenderSection.propTypes = {

    handleGender: PropTypes.func
}
