import InputText from './InputText';

function Section({ inputHeight, setInputHeight }) {
    return (
        <>
            <section>
                <InputText labelText="Write your height" name="height" placeholder="160" value={inputHeight} handleInput={setInputHeight} />


                <label htmlFor="unit">Select unit</label>
                <select
                    className="input-select"
                >
                    <option value="cm">cm</option>
                    <option value="feet">feet</option>


                </select>
            </section>


            {/* <section>
                <InputText />

                <label htmlFor="unit">Select unit</label>

                <select
                    className="input-select"
                >
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>

                </select>
            </section> */}
        </>
    )
}

export default Section
