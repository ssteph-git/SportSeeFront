import './mypie.css';
import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { getUser } from '../../../service/Data';
import FormatData from '../../../service/FormatData';

import {
    PieChart, 
    Pie,
} from "recharts";

const MyPie = function (props) {
    let { id } = useParams();
    const [user, setUser] = useState(null)
    useEffect(() => {

        getUser(id).then(user => {
            setUser(user);
        })

    }, []);

    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
      };

      const data01 = [{ name: "", value: 100 }];
      const data02 = [{ name: "score", value: 100 }];

    let formatData = new FormatData();
    let FormatDataPie = null;
    if ((user) != null) {
        FormatDataPie = formatData.pie(user.data);
        let calcPie = FormatDataPie*100;
        return (
            <div className='myPie'>

<PieChart width={210} height={210}>
      <Pie
        data={data01}
        dataKey="value"
        cx={110}
        cy={110}
        outerRadius={70}
        fill="white"

      />
      <Pie
        data={data02}
        dataKey="value"
        cx={110}
        cy={110}
        innerRadius={70}
        outerRadius={80}
        fill="red"
        startAngle={80}
        cornerRadius={100}
        endAngle={((FormatDataPie*360)+80)} //360°+ le décalage du commencement de 80°

      />
      <text
                        x='12%'
                        y='10%'
                        dy={+12}
                        style={{ fontSize: 13, fontWeight: 'bold', fill: '#21263B' }}
                        width={200}
                    >
                       Score
                    </text>
      <text
                        x='45%'
                        y='43%'
                        dy={+12}
                        style={{ fontSize: 20, fontWeight: 'bold', fill: '#1D2237' }}
                        width={200}
                    >
                       {calcPie}%
                    </text>
                    <text
                        x='45%'
                        y='53%'
                        dy={+12}
                        style={{ fontSize: 12, fontWeight: 'bold', fill: '#757A8D' }}
                    >
                       de votre
                    </text>
                    <text
                        x='45%'
                        y='63%'
                        dy={+12}
                        style={{ fontSize: 12, fontWeight: 'bold', fill: '#757A8D' }}
                    >
                       objectif
                    </text>
    </PieChart>
            </div>
        )
    }

}
export default MyPie;