import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuListHeader = styled.ul `
    list-style: none;
    background: #333;
    width: 100%;
    height: 50%;
    position:fixed;
    right: 0px;
    z-index: 1000;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 8px ${({ theme }) => theme.colorWine};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;

    transition-timing-function: cubic-bezier(10,2,3,1);
    //transform: translateX(50rem);
    //top: 0;
    top: 11%;
    z-index: 0;
    transition: 0.5s;
    
    @media (min-width: 768px) {
        top: 18%;
        width: 80%;
        right: 10%;
        padding: 35px;
    }

    @media (min-width: 1022px) {
            top: 25%;
            width: 80%;
            right: 10%;
            padding: 50px;
    }

   
       `;


function MenuList() {
    return (
        <MenuListHeader className="menu-list">
            <li className="menu-list-element"><Link to="/"><i className="fa-solid fa-house hover">    Home</i></Link></li>
            <li className="menu-list-element"><Link to="/about"><i className="fa-solid fa-address-card hover">    About Fit Pig</i></Link></li>
            <li className="menu-list-element"><Link to="/improve"><i className="fa-solid fa-dumbbell hover">    Want to improve?</i></Link></li>
        </MenuListHeader>
    )
}

export default MenuList
