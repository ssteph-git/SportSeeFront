import { NavLink } from "react-router-dom";
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
        return (
            <div className="custom-tooltip">
                <p className="label">{` ${payload[0].value} Kcal`}</p>
                <p className="label">{` ${payload[1].value} Kcal`}</p>
            </div>
        );
    }

    return null;
};

const Activity = function (props) {

    console.log("BAR", props.dataBar);
    console.log("LINE", props.dataLine);
if (props.type=="BarChart") {
    return (
        <BarChart
        // <props.type
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
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: 'red', border: '0px', borderRadius: 3, outline: 'none', fontSize: '10px', color: 'white', padding: '5px' }} />
            <Legend wrapperStyle={{ top: 0, right: 0, outline: 'none' }} iconSize={10} iconType="circle" align="right" />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <Bar name="Poid (kg)" dataKey="kilogram" fill="#1F2427" radius={[20, 20, 0, 0]} maxBarSize={10} />
            <Bar name="Kcal" dataKey="calories" fill="#EA2B2B" radius={[20, 20, 0, 0]} maxBarSize={10} />
        </BarChart>
       
    )
        }
}
export default Activity;