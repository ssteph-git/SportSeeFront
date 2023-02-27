import './profil.css';

import User from "../components/user/user";
import MyBar from "../components/charts/bar/mybar";
import Myline from '../components/charts/line/myline';
import MyRadar from '../components/charts/radar/myradar';
import MyPie from '../components/charts/pie/mypie';

import Result from '../components/result/result';
import caloriesIcon from '../components/result/assets/Calories.png'
import GlucidesIcon from '../components/result/assets/Glucides.png'
import LipidesIcon from '../components/result/assets/Lipides.png'
import ProteinesIcon from '../components/result/assets/Proteines.png'

const Profil = function (props) {

    return (
        <div className="dashbord">
            <User />
            <div className="allComponents">
                <div className="allCharts">
                    <MyBar />
                    <div className='miniCharts'>
                        <Myline />
                        <MyRadar />
                        <MyPie />
                    </div>
                </div>
                <div className="allIndicators">
                    <Result Icon={caloriesIcon} Background={"BkgroundRed"} type="Calories" />
                    <Result Icon={ProteinesIcon} Background={"BkgroundBlue"} type="Proteines" />
                    <Result Icon={GlucidesIcon} Background={"BkgroundYellow"} type="Glucides" />
                    <Result Icon={LipidesIcon} Background={"BkgroundPink"} type="Lipides" />
                </div>
            </div>
        </div>
    )

}
export default Profil;