import { NavLink } from "react-router-dom";

const Salutation = function (props) {

    return (
        
        <div className="salutation">
            <div className="nom">
                <p>Bonjour</p>
                <p>{props.name}</p>
            </div>
            <p className="completion">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )

}
export default Salutation;