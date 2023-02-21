import './myline.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getSession } from '../../../service/Data';
import FormatData from '../../../service/FormatData';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        let barKcal = "";
        if (payload[1] != undefined) {
            barKcal = <p className="label">{` ${payload[1].value} Kcal`}</p>
        }
        return (
            <div className="custom-tooltip">
                <p className="label">{` ${payload[0].value} Kg`}</p>
                {barKcal}
            </div>
        );
    }

    return null;
};


const Myline = function (props) {
    let { id } = useParams();
    const [session, setSession] = useState(null)
    useEffect(() => {

        getSession(id).then(session => {
            setSession(session);
        })

    }, []);


    function CustomizedAxisTick(props) {
        const { x, y, payload } = props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={-3}
                    y={5}
                    fill="white"
                    transform="rotate(0)"
                >
                    {payload.value}
                </text>
            </g>
        );
    }

    let formatData = new FormatData();
    let FormatDataLine = null;
    if ((session) != null) {
        FormatDataLine = formatData.Line(session.data.sessions);


        return (
            <div className='myLine'>

                <LineChart

                    width={210}
                    height={210}
                    data={FormatDataLine}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >

                    <CartesianGrid strokeDasharray="3 3" width={220} height={210} verticalFill={['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#E60000', '#E60000',]} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ right: 15, left: 15 }} tick={<CustomizedAxisTick />} />
                    <YAxis dataKey="sessionLength" domain={['dataMin-10', "dataMax+40"]} hide={true} />
                    <Tooltip content={<CustomTooltip monChart="LineChart" />} wrapperStyle={{ backgroundColor: 'white', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'black', padding: '5px' }} />
                    <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" dot={false} strokeWidth={2} background={{
                        radius: 20
                    }} />


                </LineChart>
                <div className='textLine'>Durrée moyenne des sessions</div>
            </div>
        )
    }

}
export default Myline;