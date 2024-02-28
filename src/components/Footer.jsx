import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/"><i className="fa-solid fa-house">Home</i></Link></li>
                    <li><Link to="/about"><i className="fa-solid fa-address-card">About Fit Pig</i></Link></li>
                    <li><Link to="/improve"><i className="fa-solid fa-dumbbell">Want to improve?</i></Link></li>
                </ul>
            </nav>


            <div className="author__technologies--icon">
                <a href="www.linkedin.com/in/carolinarodrp" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin">Linkedin</i>
                </a>
                <a href="https://github.com/carodriguezp" rel="noopener noreferrer">
                    <i className="fa-brands fa-github">Github</i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
