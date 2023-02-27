import PropTypes from 'prop-types'
import './check.css';
import { NavLink } from "react-router-dom";
const Check = function (props) {

    return (
        <>
            <NavLink to={props.navigation} className="lien_nav" >
                <div className='Background-icon'>
                    <img className="check_icon" src={props.checkIcon} alt={props.altChekIcon} />
                </div>
            </NavLink>
        </>
    )

}
export default Check;

Check.propTypes = {
    checkIcon: PropTypes.string,
    altChekIcon: PropTypes.string,
    navigation: PropTypes.string
}