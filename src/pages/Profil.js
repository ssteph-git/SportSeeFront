import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { getUser, getActivity, getSession, getPerformance } from '../service/Data';
import React, { useEffect, useState } from 'react';
import Erreur from "./Erreur";
import Salutation from "../components/salutation";
import Chart from "../components/chart";
import FormatData from "../service/FormatData";

const Profil = function (props) {

    let { id } = useParams();
    const [user, setUser] = useState(null)
    const [activity, setActivity] = useState(null)
    const [session, setSession] = useState(null)
    const [performance, setPerformance] = useState(null)

    useEffect(() => {
        getUser(id).then(user => {
            setUser(user);
        })
        getActivity(id).then(activity => {
            setActivity(activity);
        })
        getSession(id).then(session => {
            setSession(session);
        })
        getPerformance(id).then(performance => {
            setPerformance(performance);
        })
    }, []);

    let formatData = new FormatData();
    let FormatDataBar,FormatDataLine,FormatDataRadar,FormatDataPie=null;
    if ((activity&&session&&performance&&user) != null) {
        FormatDataBar = formatData.Bar(activity.data.sessions);
        FormatDataLine = formatData.Line(session.data.sessions);
        FormatDataRadar = formatData.radar(performance.data);
        FormatDataPie = formatData.pie(user.data);
    }  


    return (<>

        {performance == null ? (<Erreur />) :
            (<div className="dashbord">
                <Salutation name={user.data.userInfos.firstName} />
                <Chart dataBar={FormatDataBar} dataLine={FormatDataLine} dataRadar={FormatDataRadar} dataPie={FormatDataPie} type='BarChartLineChart'/>
            </div>)
        }

    </>)

}
export default Profil;