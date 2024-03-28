import { aboutFitPigText } from "../aboutFitPigText";


function About() {

    return (
        <div>

            <h1>About fit pig</h1>

            {aboutFitPigText.map((el, index) => (
                <section key={index}>
                    <h2>{el.title}</h2>
                    <p>{el.text}</p>
                </section>
            ))}
        </div>
    )
}

export default About
