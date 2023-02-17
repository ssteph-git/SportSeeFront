import { logDOM } from "@testing-library/react";
import {
    PieChart, 
    Pie,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    LineChart,
    Line,
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

const Chart = function (props) {

    // console.log("BAR", props.dataBar);
    // console.log("LINE", props.dataLine);
    let regexFindChart = /BarChart/gmi; //permet de vérifier le ou les graphs à afficher
    let verif = props.type.search(regexFindChart);
    // console.log("verif", verif);
    let myChartBar;
    if (verif != -1) {
        verif = null; //remettre le compteur à zero: pour le prochain verif

        myChartBar = <BarChart

            width={500}
            height={300}
            data={props.dataBar}
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
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <Bar name="Poid (kg)" dataKey="kilogram" fill="#1F2427" radius={[20, 20, 0, 0]} maxBarSize={10} />
            <Bar name="Kcal" dataKey="calories" fill="#EA2B2B" radius={[20, 20, 0, 0]} maxBarSize={10} />
        </BarChart>

    }

    regexFindChart = /LineChart/gmi;
    verif = props.type.search(regexFindChart);
    let myChartLine;
    // console.log("verif2", verif);
    if (verif != -1) {
        verif = null;

        myChartLine = <LineChart
            width={300}
            height={300}
            data={props.dataLine}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" verticalFill={['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#E60000', '#E60000']} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip monChart="LineChart" />} wrapperStyle={{ backgroundColor: 'white', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'black', padding: '5px' }} />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="white" dot={false} />
        </LineChart>

    }

    let myChartRadar;
    myChartRadar = <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={props.dataRadar.data}
    >
        
        {/* <PolarGrid /> */}
        <PolarGrid gridType="polygon" radialLines={false} stroke="white"/>
        
        {/* <PolarAngleAxis dataKey="kind" /> */}
        <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} fill="#1F2427"/>
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


    let myChartPie;
    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
      };

      const data01 = [
        { name: "", value: 100 },
       
      
      ];
      const data02 = [
        { name: "score", value: 100 },
      ];


      myChartPie = <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={70}
        fill="white"

      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="red"
        startAngle={60}
        cornerRadius={100}
        // endAngle={props.dataPie*360}
        // endAngle={420}
        endAngle={props.dataPie*420} //360+ le décalage du commencement de 60°

      />
    </PieChart>


    return (<>
        {myChartBar}<br></br>
        {myChartLine}<br></br>
        {myChartRadar}<br></br>
        {myChartPie}
        </>);
}


export default Chart;