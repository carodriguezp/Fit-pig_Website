import { Link } from "react-router-dom";
import { aboutFitPigText } from "./aboutFitPigText";


function About() {

    return (
        <div className="about">

            <div className="about__div-title">
                <h1>About fit pig</h1>

                <Link to={`/`} >
                    <i className="fa-solid fa-circle-xmark"></i>
                </Link>
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
