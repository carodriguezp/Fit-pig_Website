

function Form() {
    return (
        <form>
            <section>
                <label htmlFor="">Write your heigth in cm</label>
                <input type="text" name="heigth" placeholder="160" />

                <label htmlFor="House">Select unit</label>
                <select
                    className="input-select"
                >
                    <option value="All">cm</option>
                    <option value="Gryffindor">feet</option>


                </select>
            </section>
            <section>
                <label htmlFor="">Write your weight</label>
                <input type="text" name="weight" placeholder="65" />

                <label htmlFor="House">Select unit</label>

                <select
                    className="input-select"
                >
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>

                </select>
            </section>

            <label htmlFor="">Select your gender</label>

            <input type="radio" name="gender" value="female" />
            <label htmlFor="">Female</label>

            <input type="radio" name="gender" value="male" />
            <label htmlFor="">Male</label>

        </form>
    )
}

export default Form

