import './myradar.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getPerformance } from '../../../service/Data';
import FormatData from '../../../service/FormatData';

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from "recharts";


const MyRadar = function (props) {
    let { id } = useParams();
    const [performance, setPerformance] = useState(null)
    useEffect(() => {

        getPerformance(id).then(performance => {
            setPerformance(performance);
        })

    }, []);

    let formatData = new FormatData();
    let FormatDataRadar = null;
    if ((performance) != null) {
        FormatDataRadar = formatData.radar(performance.data);
        return (
            <div className='myRadar'>
    
                <RadarChart
                    cx={110}
                    cy={110}
                    outerRadius={70}
                    width={210}
                    height={210}
                    data={FormatDataRadar.data}
                >
    
                    {/* <PolarGrid /> */}
                    <PolarGrid gridType="polygon" radialLines={false} stroke="white" />
    
                    {/* <PolarAngleAxis dataKey="kind" /> */}
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} fill="#1F2427" />
                    {/* <PolarRadiusAxis stroke="#FF0000"/> */}
                    <Radar
                        name="Mike"
                        dataKey="value"
                        // stroke="#FF0000"
                        fill="#FF0000"
                        fillOpacity={0.6}
                        // background={{ fill: 'black' }}
                        wrapperStyle={{ backgroundColor: 'white', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'black', padding: '5px' }} />
                </RadarChart>
            </div>
        )
    }
}
export default MyRadar;