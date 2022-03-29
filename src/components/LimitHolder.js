import MyCard from "./MyCard";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import Button from "react-bootstrap/Button";
const LimitHolder = () => {
    const tabs = ["Limit", "tab - 2", "tab - 3"];
    const [selected, setSelected] = useState(0);
    const textWithInput = [
        {
            text: "Text 1",
            input: "Input 1",
            afterInput: "USD",
        },
        {
            text: "Text 2",
            input: "Input 2",
            afterInput: "USD",
        },
        {
            text: "Text 3",
            input: "Input 3",
            afterInput: <BsCashCoin />,
        },
    ];
    const textWithInputJsx = textWithInput.map((elem, index) => (
        <div
            key={index}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "3ch",
                // paddingRight: "2ch",
            }}
        >
            <span>{elem.text}</span>
            <div
                style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
            >
                <input
                    type="text"
                    style={{
                        width: "60%",
                        marginRight: "10px",
                        textAlign: "center",
                    }}
                />
                <span style={{ marginTop: "auto" }}>{elem.afterInput}</span>
            </div>
        </div>
    ));
    const body = (
        <div>
            {textWithInputJsx}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="outline-success" className="glow-button green">
                    Buy | Long
                </Button>
                <Button variant="outline-danger" className="glow-button red">
                    Sell | Short
                </Button>
            </div>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <span style={{ marginRight: "15%" }}>Merge</span>
                    <span>-0.0000</span>
                </div>
                <div
                    style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <span style={{ marginRight: "15%" }}>Merge</span>
                    <span>-0.0000</span>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <MyCard
                tabs={tabs}
                tabChange={setSelected}
                body={body}
                selectedIndex={selected}
            />
        </div>
    );
};

export default LimitHolder;
