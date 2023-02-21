import './check.css';
// import yoga from "./check/assets/yoga.png";
// import yoga from "./assets/yoga.png";
const Check = function (props) {

    return (
        <>
            <div className='Background-icon'>
                <img className="check_icon" src={props.checkIcon} alt={props.altChekIcon} />
                {/* <img className="check_icon" src="./assets/bike.png" alt={props.altChekIcon} /> */}
            </div>
        </>
    )

}
export default Check;