import './mybar.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getActivity } from '../../../service/Data';
import FormatData from '../../../service/FormatData';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
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


const MyBar = function (props) {
    let { id } = useParams();
    const [activity, setActivity] = useState(null)
    useEffect(() => {

        getActivity(id).then(activity => {
            setActivity(activity);
        })

    }, []);

    let formatData = new FormatData();
    let FormatDataBar = null;
    if ((activity) != null) {
        FormatDataBar = formatData.Bar(activity.data.sessions);
    }


    return (
        <div className="myBar">
            <BarChart

                // wrapperStyle={{ backgroundColor: 'red', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'white', padding: '5px' }}
                // width={550}
                width={680}
                height={250}
                data={FormatDataBar}
                barCategoryGap={24}
                margin={{
                    top: 35,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10}>
                </XAxis>
                <YAxis dataKey="calories" orientation='right' axisLine={false} tickLine={false} tickMargin={10} />
                <Tooltip content={<CustomTooltip monChart="BarChart" />} wrapperStyle={{ backgroundColor: 'red', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'white', padding: '5px' }} />
                <Legend wrapperStyle={{ top: 0, right: 0, outline: 'none' }} iconSize={10} iconType="circle" align="right" />
                {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
                <Bar name="Poid (kg)" dataKey="kilogram" fill="#1F2427" radius={[20, 20, 0, 0]} maxBarSize={8} />
                <Bar name="Kcal" dataKey="calories" fill="#EA2B2B" radius={[20, 20, 0, 0]} maxBarSize={8} />
            </BarChart>
        </div>

    )

}
export default MyBar;


