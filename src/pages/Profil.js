import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import getUser from '../service/Data';
import React, { useEffect, useState } from 'react';
import Erreur from "./Erreur";

const Profil = function (props) {

    let { id } = useParams();
    const [user, setUser] = useState(null)


    useEffect(() => {
        getUser(id).then(user => {
            setUser(user);
            console.log(user);
        })
        // setUser(getUser(id));
       
    }, []);



        return (<>

            {user == null ? (<Erreur />) :
                (<div className="dashbord">
                    <div className="salutation">
                        <div className="nom">
                            <p>Bonjour</p>
                            <p>{user.data.id}</p>
                        </div>
                        <p className="completion"></p>
                    </div>
                </div>)
            }

                </> )

}
export default Profil;