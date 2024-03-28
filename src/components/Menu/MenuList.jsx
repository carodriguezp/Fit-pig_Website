import { Link } from "react-router-dom"

function MenuList() {
    return (
        <ul className="menu-list">
            <li className="menu-list-element"><Link to="/"><i className="fa-solid fa-house hover">Home</i></Link></li>
            <li className="menu-list-element"><Link to="/about"><i className="fa-solid fa-address-card hover">About Fit Pig</i></Link></li>
            <li className="menu-list-element"><Link to="/improve"><i className="fa-solid fa-dumbbell hover">Want to improve?</i></Link></li>
        </ul>
    )
}

export default MenuList
