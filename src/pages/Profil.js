import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { getUser, getActivity, getSession } from '../service/Data';
import React, { useEffect, useState } from 'react';
import Erreur from "./Erreur";
import Salutation from "../components/salutation";
import Activity from "../components/activity";
import FormatData from "../service/FormatData";

const Profil = function (props) {

    let { id } = useParams();
    const [user, setUser] = useState(null)
    const [activity, setActivity] = useState(null)
    const [session, setSession] = useState(null)

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
    }, []);

    let formatData = new FormatData();
    let FormatDataBar,FormatDataLine=null;
    if ((activity) != null) {
        FormatDataBar = formatData.Bar(activity.data.sessions);
    }  
    if(session != null) {
        FormatDataLine = formatData.Line(session.data.sessions);
    }

    return (<>

        {user == null ? (<Erreur />) :
            (<div className="dashbord">
                <Salutation name={user.data.userInfos.firstName} />
                <Activity dataBar={FormatDataBar} dataLine={FormatDataLine} type='BarChart'/>
            </div>)
        }

    </>)

}
export default Profil;