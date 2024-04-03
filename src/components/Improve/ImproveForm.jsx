import PropTypes from "prop-types";


function ImproveForm({ handleSelectDay, frecuencyDay }) {

  const handleInputSelect = (ev) => {

    handleSelectDay(ev.target.value)//recoje valor de los option
  }
  return (
    <div className="form-div">
      <label htmlFor="training">Select your training days per week</label>

      <select
        className="input-select"
        onChange={handleInputSelect}
        value={frecuencyDay}

      >

        <option value="1">1</option>
        <option value="2" >2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" >5</option>
        <option value="6">6</option>
        <option value="7">7</option>

      </select>
    </div>
  )
}

ImproveForm.propTypes = {

  handleSelectDay: PropTypes.func,
  frecuencyDay: PropTypes.string,
}

export default ImproveForm
