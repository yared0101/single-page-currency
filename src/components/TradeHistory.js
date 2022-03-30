import React, { useRef, useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import MyCard from "./MyCard";
let data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
data = data.concat(data).concat(data).concat(data).concat(data);
const TradeHistory = () => {
    const name1 = useRef(null);
    const [width1, setWidth1] = useState(0);
    const [trigger, setTrigger] = useState();
    useEffect(() => {
        name1.current && setWidth1(name1.current.offsetWidth);
    }, [trigger]);
    window.addEventListener("resize", (e) => {
        setTrigger(e);
    });
    const body = (
        <div ref={name1}>
            <LineChart
                width={width1}
                height={300}
                style={{ width: "100%", height: "100%" }}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    // activeDot={{ r: 8 }}
                    dot={false}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    );
    return <MyCard title="Trade History" body={body} />;
};

export default TradeHistory;
