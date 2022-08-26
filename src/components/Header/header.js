import "./header.css"
import Logo from "./Logo.png"

function Header() {
    return(
        <div className="container__header">
            <img className="header__logo" src={Logo} alt="Logo" />
            <div className="menu__header">
                <div className="menu__elem">Main</div>
                <div className="menu__elem">Terms of service</div>
                <div className="line__menu">
                    <div>Works</div>    
                    <hr/>
                </div>
                <div className="menu__elem">Contact</div>
            </div>
        </div>
    )
}

export default Header;