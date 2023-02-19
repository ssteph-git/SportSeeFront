import './user.css';

const User = function (props) {

    return (
        
        <div className="user">
            <div className="nom">
                <p>Bonjour</p>
                <p>{props.name}</p>
            </div>
            <p className="result">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )

}
export default User;