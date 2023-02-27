import PropTypes from 'prop-types'
import './result.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getUser } from '../../service/Data';
import FormatData from '../../service/FormatData';

const Result = function (props) {
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

        FormatDataUser = formatData.success(user.data, props.type);

        return (
            <div className='result'>
                <div className='leftResult'>
                    <div className={props.Background}>
                        <img className="imageIcon" src={props.Icon} alt="Icone du site Sportsee" />
                    </div>
                </div>
                <div className='RightResult'>
                    <p className='valueResult'>{FormatDataUser}</p>
                    <p className='typeResult'>{props.type}</p>
                </div>

            </div>
        )
    }

}
export default Result;

Result.propTypes = {
    Icon: PropTypes.string,
    Background: PropTypes.string,
    type: PropTypes.string
}