

function inputSelect({ valueUnit1, valueUnit2 }) {
    return (
        <>
            <label htmlFor="unit" className="hover">Select unit</label>
            <select
                className="input-select hover"
            >
                <option value={valueUnit1}>{valueUnit1} </option>
                <option value={valueUnit2}>{valueUnit2}</option>


            </select>
        </>
    )
}

export default inputSelect
