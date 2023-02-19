import './leftbar.css';
import Check from "../check/check";
import yoga from "../check/assets/yoga.png";
import swim from "../check/assets/swim.png";
import bike from "../check/assets/bike.png";
import force from "../check/assets/force.png";



const Leftbar = function (props) {

    return (
        <div className="menu_left">
            <div className="checkIcon_total">
                <Check checkIcon={yoga} />
                <Check checkIcon={swim} />
                <Check checkIcon={bike} />
                <Check checkIcon={force} />
            </div>
            <div>
                <p className="copyright"><small> Copyright Sportsee 2020</small></p>
            </div>
        </div>
    )

}
export default Leftbar;