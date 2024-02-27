

function inputSelect({ valueUnit1, valueUnit2 }) {
    return (
        <>
            <label htmlFor="unit">Select unit</label>
            <select
                className="input-select"
            >
                <option value={valueUnit1}>{valueUnit1} </option>
                <option value={valueUnit2}>{valueUnit2}</option>


            </select>
        </>
    )
}

export default inputSelect
