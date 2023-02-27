import './user.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getUser } from '../../service/Data';
import FormatData from '../../service/FormatData';

const User = function (props) {
    let { id } = useParams();
    const [user, setUser] = useState(null)
    useEffect(() => {

        getUser(id).then(user => {
            setUser(user);
        })

    }, []);


    let formatData = new FormatData();
    let FormatDataUser = null;
    if ((user) != null) {

        FormatDataUser = formatData.infos(user.data);

        return (

            <div className="user">
                <div className="nom">
                    <p>Bonjour</p>
                    <p>{FormatDataUser}</p>
                </div>
                <p className="resultUser">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        )
    }

}
export default User;