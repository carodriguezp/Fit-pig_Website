// import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            {/* <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-list-element"><Link to="/"><i className="fa-solid fa-house hover">Home</i></Link></li>
                    <li className="footer__nav-list-element"><Link to="/about"><i className="fa-solid fa-address-card hover">About Fit Pig</i></Link></li>
                    <li className="footer__nav-list-element"><Link to="/improve"><i className="fa-solid fa-dumbbell hover">Want to improve?</i></Link></li>
                </ul>
            </nav> */}

            <p className="copy">© Copyrigth 2024</p>

            <div className="footer__div">
                <a href="https://www.linkedin.com/in/carolinarodrp" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin hover">  Linkedin</i>
                </a>
                <a href="https://github.com/carodriguezp" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github hover">  Github</i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
