import styled from "styled-components";

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../globalStyles';
import { theme } from '../../theme';

import MenuList from "./MenuList";

const MenuHeader = styled.div `

/* background-color: ${({ theme }) => theme.colorPalePink}; */

    background-color:white;
    width: 100%;



    i {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colorWine};

        

        @media (min-width: 768px) {
            font-size: 3.5rem;
        }

        @media (min-width: 1022px) {
            font-size: 3.5rem;
        }

    }

    i.fa-bars{
            position: absolute;
            top: 10px;
            right: 10px;
            width: 100vw;
            display: flex;
            flex-direction: row-reverse;
        }

    `;


function Menu() {
    return (

        <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <MenuHeader className="menu">
        
            <i className="fa-solid fa-bars"></i>

            <MenuList />

        </MenuHeader>

        </>
    </ThemeProvider>
    )
}

export default Menu
