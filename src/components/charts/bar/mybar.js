import './mybar.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getActivity } from '../../../service/Data';
import FormatData from '../../../service/FormatData';

import {
    BarChart,
    Bar,
    Label,
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

const CustomLegend = (value) => {
    return (
        <>
        <span style={{ color: "#74798C" }}>{value}</span>
        </>
    )
}


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
                width={680}
                height={234}
                data={FormatDataBar}
                barCategoryGap={30}
                margin={{
                    top: 0,
                    right: 0,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="1 3" />
                <Legend wrapperStyle={{paddingTop: "15px", fontSize:"13px", paddingRight:"5px"}} formatter={CustomLegend} height={50} iconSize={8} iconType="circle" align="right" verticalAlign="top"/>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
                <YAxis dataKey="kilogram" orientation='right' axisLine={false} tickLine={false} tickMargin={10} domain={['auto', 'dataMax+500']} hide={true} tickCount="3" />
                <YAxis yAxisId="kilogram" dataKey="kilogram" orientation='right' axisLine={false} tickLine={false} tickMargin={10} domain={['datamin-', 'dataMax+4']} />

                <Tooltip content={<CustomTooltip monChart="BarChart" />} wrapperStyle={{ backgroundColor: 'red', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'white', padding: '5px' }} />
                <Bar name="Poid (kg)" dataKey="kilogram" fill="#1F2427" radius={[20, 20, 0, 0]} maxBarSize={8} minPointSize={60}/>
                <Bar name="Calories brûlées (Kcal)" dataKey="calories" fill="#EA2B2B" radius={[20, 20, 0, 0]} maxBarSize={8} minPointSize={20}/>
                <text
                    x='6%'
                    y='7%'
                    dy={+12}
                    style={{ fontSize: 12, fontWeight: 'bold', fill: '#1D2237' }}
                    width={200}
                >
                    Activité quotidienne
                </text>
            </BarChart>
        </div>

    )

}
export default MyBar;


