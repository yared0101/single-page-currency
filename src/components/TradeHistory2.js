import { useState } from "react";
import MyCard from "./MyCard";
const TradeHistory2 = () => {
    const tabs = [
        "tab - 1",
        "tab - 2",
        "tab - 3",
        "tab - 4",
        "tab - 5",
        "tab - 6",
    ];
    const [selected, setSelected] = useState(0);
    return (
        <div
            style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
            }}
        >
            <MyCard
                tabs={tabs}
                tabChange={setSelected}
                body={<div style={{ minHeight: 100 }}></div>}
                selectedIndex={selected}
                title="Trade History"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
            />
        </div>
    );
};

export default TradeHistory2;
