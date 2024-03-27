import Menu from "./Menu"


function Header() {
    return (
        <header className="header">
            <div className="header__div">
                <div className="header__div-div">
                    <img src="src\images\pigFace.png" alt="" />
                    <h1>Fit Pig</h1>
                </div>

                <Menu />
            </div>

            <h2>Even if you feel fat, you can be fit</h2>
            <h3>BMI Calculator</h3>
        </header>
    )
}

export default Header
