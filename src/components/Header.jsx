import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Menu from "./Menu/Menu"


const HeaderPage = styled.header `
background: linear-gradient(180deg, rgba(255, 230, 242, 1) 0%, rgba(255, 204, 230, 1) 36%, rgba(179, 0, 89, 1) 100%);

width: 100%;
padding: 20px 10px 5px 10px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
min-height: 25vh;

@media (min-width: 768px) {
    padding: 20px 10px 10px 30px;
    gap: 10px;
}


.header__div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media (min-width: 768px) {
            padding-right: 10px;
        }

        @media (min-width: 1022px) {
            padding-right: 20px;
        }

        &-div {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            gap: 20px;

            @media (min-width: 768px) {
                align-items: center;
                gap: 30px;
            }

            @media (min-width: 1022px) {
                padding: 20px 10px 15px 35px;
            }

            img {
                width: 50px;

                @media (min-width: 768px) {
                    width: 100px;
                }

                @media (min-width: 1022px) {
                    width: 130px;
                }
            }

            h1 {
                font-family:${({ theme }) => theme.fontFamilyGluten};
                font-weight:${({ theme }) => theme.fontWeightGluten}; 
                font-size: 5.2rem;
                color:${({ theme }) => theme.colorTruePink};

                @media (min-width: 768px) {
                    font-size: 7rem;
                }

                @media (min-width: 1022px) {
                    font-size: 9rem;
                }
            }
        }
    }





    h2 {
        font-family:${({ theme }) => theme.fontFamilySister}; 
        font-weight:${({ theme }) => theme.fontWeightSister}; 
        font-size: 1.8rem;
        color:${({ theme }) => theme.colorWine}; 

        @media (min-width: 768px) {
            font-size: 3rem;
        }

        @media (min-width: 1022px) {
            font-size: 4rem;
        }
    }

    h3 {
        font-family:${({ theme }) => theme.fontFamilyLuckiestguy}; 
        font-weight:${({ theme }) => theme.fontWeightLuckiestguy}; 
        font-size: 2rem;
        color:${({ theme }) => theme.colorSoftPink}; 

        @media (min-width: 768px) {
            font-size: 2.8rem;
        }

        @media (min-width: 1022px) {
            font-size: 3.8rem;
        }
    }

`;


function Header() {
    return (
<ThemeProvider theme={theme}>
        <>
        <HeaderPage className="header">
            <div className="header__div">
                <div className="header__div-div">
                    <img src="src\images\pigFace.png" alt="" />
                    <h1>Fit Pig</h1>
                </div>

                
            </div>

            <h2>Even if you feel fat, you can be fit</h2>
            <h3>BMI Calculator</h3>
            
        </HeaderPage>


        <Menu />
        </>
        </ThemeProvider>
    )
}

export default Header
