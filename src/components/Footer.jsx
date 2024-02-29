import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/"><i className="fa-solid fa-house hover">Home</i></Link></li>
                    <li><Link to="/about"><i className="fa-solid fa-address-card hover">About Fit Pig</i></Link></li>
                    <li><Link to="/improve"><i className="fa-solid fa-dumbbell hover">Want to improve?</i></Link></li>
                </ul>
            </nav>


            <div className="author__technologies--icon">
                <a href="https://www.linkedin.com/in/carolinarodrp" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin hover">Linkedin</i>
                </a>
                <a href="https://github.com/carodriguezp" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github hover">Github</i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
