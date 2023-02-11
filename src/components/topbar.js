import { NavLink } from "react-router-dom";

const Topbar = function (props) {

    return (
        <header>
            <div className="menu_top">
                <div className="logo">
                    <img className="image_logo" src="/assets/logo.png" alt="Logo du site Sportsee" />
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink to="/" className="lien_nav"><span>Accueil</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/user" className="lien_nav"><span>Profil</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/parameters" className="lien_nav"><span>Réglage</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/community" className="lien_nav"><span>Communauté</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}
export default Topbar;