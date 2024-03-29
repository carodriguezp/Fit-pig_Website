import { aboutFitPigText } from "./aboutFitPigText";


function About() {

    return (
        <div className="about">

            <div className="about__div-title">
                <h1>About fit pig</h1>
                <i className="fa-solid fa-circle-xmark"></i>

            </div>

            <div className="about__div">
                {aboutFitPigText.map((el, index) => (
                    <section className="about__div-section" key={index}>
                        <h2>{el.title}</h2>
                        <p>{el.text}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default About
