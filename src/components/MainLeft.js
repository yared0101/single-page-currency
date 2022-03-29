import { BsCircle } from "react-icons/bs";
import { SiBinance } from "react-icons/si";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { MdHistory } from "react-icons/md";
import Form from "react-bootstrap/Form";
import MainImage from "../left-image.jpg";
import MyCard from "./MyCard";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { useState } from "react";
const MyWallet = () => {
    const [selectedOption, setSelectedOption] = useState({
        value: 0,
        text: "BNB",
        icon: <SiBinance color="yellow" />,
    });
    const [selectedOption2, setSelectedOption2] = useState({
        value: 0,
        text: "BNB",
        icon: <SiBinance color="yellow" />,
    });
    const [selectedOption3, setSelectedOption3] = useState({
        value: 0,
        text: "BNB",
        icon: <SiBinance color="blue" />,
    });
    const [selectedOption4, setSelectedOption4] = useState({
        value: 0,
        text: "BNB",
        icon: <SiBinance color="blue" />,
    });

    // handle onChange event of the dropdown
    const handleChange = (e) => {
        setSelectedOption(e);
    };
    const handleChange2 = (e) => {
        setSelectedOption2(e);
    };
    const handleChange3 = (e) => {
        setSelectedOption3(e);
    };
    const handleChange4 = (e) => {
        setSelectedOption4(e);
    };
    const image = (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: 20,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div>
                    <img src={MainImage} alt="Main Here" />
                </div>
            </div>
        </div>
    );
    const musketeersArray = [
        {
            title: "zDrone",
            key: "zDrone0xb47e...3bb",
        },
        {
            title: "Status",
            key: (
                <span
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: "auto",
                    }}
                >
                    <BsCircle
                        color="red"
                        style={{
                            backgroundColor: "red",
                            borderRadius: "50%",
                            marginTop: "auto",
                            marginBottom: "auto",
                        }}
                    />
                    <span style={{ marginLeft: "1ch", marginRight: "1ch" }}>
                        inactive
                    </span>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        style={{ color: "red", backgroundColor: "inherit" }}
                    />
                </span>
            ),
        },
        {
            title: (
                <span
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: "auto",
                    }}
                >
                    <SiBinance
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            color: "yellow",
                        }}
                    />
                    <span style={{ marginLeft: "1ch", marginRight: "1ch" }}>
                        Binance
                    </span>
                </span>
            ),
            key: (
                <span
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: "auto",
                    }}
                >
                    <FaBitcoin
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            color: "yellow",
                        }}
                    />
                    <span style={{ marginLeft: "1ch", marginRight: "1ch" }}>
                        BTC/UTSD
                    </span>
                    <FaBitcoin
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            color: "yellow",
                        }}
                    />
                </span>
            ),
        },
    ];
    const musketeersJsx = musketeersArray.map((elem, index) => (
        <div
            key={index}
            style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "1ch",
                paddingLeft: "4ch",
                paddingRight: "4ch",
                marginTop: "2ch",
                marginBottom: "2ch",
                marginLeft: "-2ch",
                marginRight: "-2ch",
            }}
        >
            <span style={{ color: "lightgrey" }}>{elem.title}</span>
            <span style={{ color: "lightgrey" }}>{elem.key}</span>
        </div>
    ));
    const bodyList = [
        {
            key: "Sell if trade pumps",
            info: "%",
        },
        {
            key: "Buy if trade pumps",
            info: "%",
        },
    ];
    const bodyListJsx = bodyList.map((elem, index) => (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "3ch",
            }}
            key={index}
        >
            <span>{elem.key}</span>
            <Badge
                bg="secondary"
                style={{
                    padding: "1ch",
                    paddingLeft: "20%",
                    paddingRight: "20%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {elem.info}
            </Badge>
        </div>
    ));
    const exchangePart = (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <h3 style={{ padding: "0 !important" }}>Exchange</h3>
                <h6 style={{ color: "lightgrey", padding: "0 !important" }}>
                    <small>Trade Tokens in an Instant</small>
                </h6>
            </div>
            <span>
                <GoSettings
                    size={30}
                    color="white"
                    style={{ paddingRight: "5px" }}
                />
                <MdHistory size={30} color="white" />
            </span>
        </div>
    );
    const fromToBoxesArray = [
        {
            from: "From",
            balance: "Balance 0.481942",
            value: "0.0",
            max: (
                <span className="span-test" style={{ display: "flex" }}>
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "1ch",
                        }}
                    >
                        Max
                    </span>
                    <Select
                        placeholder="Select Option"
                        value={selectedOption}
                        style={{
                            backgrounColor: "green",
                            width: "10% !important",
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 0,
                                text: "BNB",
                                icon: <SiBinance color="yellow" />,
                            },
                            {
                                value: 1,
                                text: "Bitcoin",
                                icon: <FaBitcoin color="yellow" />,
                            },
                            {
                                value: 2,
                                text: "Ethereum",
                                icon: <FaEthereum color="yellow" />,
                            },
                        ]}
                        getOptionLabel={(e) => (
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {e.icon}
                                <span style={{ marginLeft: 5 }}>{e.text}</span>
                            </span>
                        )}
                    />
                </span>
            ),
        },
        {
            from: "To",
            balance: "0",
            value: "0.0",
            max: (
                <span className="span-test" style={{ display: "flex" }}>
                    <Select
                        placeholder="Select Option"
                        value={selectedOption2}
                        style={{
                            backgrounColor: "green",
                            width: "10% !important",
                        }}
                        onChange={handleChange2}
                        options={[
                            {
                                value: 0,
                                text: "BNB",
                                icon: <SiBinance color="yellow" />,
                            },
                            {
                                value: 1,
                                text: "Bitcoin",
                                icon: <FaBitcoin color="yellow" />,
                            },
                            {
                                value: 2,
                                text: "Ethereum",
                                icon: <FaEthereum color="yellow" />,
                            },
                        ]}
                        getOptionLabel={(e) => (
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {e.icon}
                                <span style={{ marginLeft: 5 }}>{e.text}</span>
                            </span>
                        )}
                    />
                </span>
            ),
        },
    ];
    const fromToBoxesJsx = fromToBoxesArray.map((elem, index) => (
        <div
            key={index}
            style={{
                marginLeft: "5%",
                marginTop: "5%",
                width: "90%",
                borderRadius: "10px",
                backgroundColor: "rgba(0,0,0,0.2)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    marginLeft: "2ch",
                    marginBottom: "2ch",
                    marginTop: "2ch",
                    marginRight: "2ch",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(0,0,0,0)",
                }}
            >
                <span>{elem.from}</span>
                <span>{elem.balance}</span>
            </div>
            <div
                style={{
                    display: "flex",
                    marginLeft: "2ch",
                    marginRight: "2ch",
                    marginBottom: "2ch",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0)",
                }}
            >
                <span>{elem.value}</span>
                <span>{elem.max}</span>
            </div>
        </div>
    ));
    const bodyList2 = [
        {
            key: "Balance (USD)",
            info: "$1000",
        },
        {
            key: "some text here",
            info: "$1000",
        },
    ];
    const bodyList2Jsx = bodyList2.map((elem, index) => (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "3ch",
            }}
            key={index}
        >
            <span>{elem.key}</span>
            <Badge
                bg="secondary"
                style={{
                    padding: "1ch",
                    paddingLeft: "20%",
                    paddingRight: "20%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {elem.info}
            </Badge>
        </div>
    ));
    const fromToBoxesArray2 = [
        {
            from: "From",
            balance: "some text here",
            value: "0.1236373",
            max: (
                <span className="span-test" style={{ display: "flex" }}>
                    <Select
                        placeholder="Select Option"
                        value={selectedOption3}
                        onChange={handleChange3}
                        options={[
                            {
                                value: 0,
                                text: "BNB",
                                icon: <SiBinance color="blue" />,
                            },
                            {
                                value: 1,
                                text: "Bitcoin",
                                icon: <FaBitcoin color="blue" />,
                            },
                            {
                                value: 2,
                                text: "Ethereum",
                                icon: <FaEthereum color="blue" />,
                            },
                        ]}
                        getOptionLabel={(e) => (
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {e.icon}
                                <span style={{ marginLeft: 5 }}>{e.text}</span>
                            </span>
                        )}
                    />
                </span>
            ),
        },
        {
            from: "To",
            balance: "some text here",
            value: "0.00272511",
            max: (
                <span className="span-test" style={{ display: "flex" }}>
                    <Select
                        placeholder="Select Option"
                        value={selectedOption4}
                        style={{
                            backgrounColor: "green",
                            width: "10% !important",
                        }}
                        onChange={handleChange4}
                        options={[
                            {
                                value: 0,
                                text: "BNB",
                                icon: <SiBinance color="blue" />,
                            },
                            {
                                value: 1,
                                text: "Bitcoin",
                                icon: <FaBitcoin color="blue" />,
                            },
                            {
                                value: 2,
                                text: "Ethereum",
                                icon: <FaEthereum color="blue" />,
                            },
                        ]}
                        getOptionLabel={(e) => (
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {e.icon}
                                <span style={{ marginLeft: 5 }}>{e.text}</span>
                            </span>
                        )}
                    />
                </span>
            ),
        },
    ];
    const fromToBoxes2Jsx = fromToBoxesArray2.map((elem, index) => (
        <div
            key={index}
            style={{
                marginLeft: "5%",
                marginTop: "5%",
                width: "90%",
                borderRadius: "10px",
                backgroundColor: "rgba(0,0,0,0.2)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    marginLeft: "2ch",
                    marginBottom: "2ch",
                    marginTop: "2ch",
                    marginRight: "2ch",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(0,0,0,0)",
                }}
            >
                <span>{elem.from}</span>
                <span>{elem.balance}</span>
            </div>
            <div
                style={{
                    display: "flex",
                    marginLeft: "2ch",
                    marginRight: "2ch",
                    marginBottom: "2ch",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0)",
                }}
            >
                <span>{elem.value}</span>
                <span>{elem.max}</span>
            </div>
        </div>
    ));
    const swap = (
        <div style={{ width: "70%", marginLeft: "10%" }}>
            <Button
                variant="outline-success"
                className="glow-button green full"
            >
                Swap
            </Button>
        </div>
    );
    const bodyList3Jsx = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
            }}
        >
            <span>somee </span>
            <br />
            <span>somee fa</span>
            <br />
            <span>freedom </span>
            <br />
            <span>somee here4</span>
            <br />
            <span>her33e </span>
            <br />
            <span>free</span>
            <br />
            <span
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                    padding: "1ch",
                    color: "lightgrey",
                }}
            >
                <span>text 1</span>
                <span>text 2</span>
            </span>
        </div>
    );
    const activate = (
        <div style={{ width: "90%", marginTop: "10%" }}>
            <Button
                variant="outline-success"
                className="glow-button green full"
            >
                Activate
            </Button>
        </div>
    );
    const body = (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {image}
            {musketeersJsx}
            {bodyListJsx}
            {exchangePart}
            {fromToBoxesJsx}
            {bodyList2Jsx}
            <h4>Slip Page</h4>
            {fromToBoxes2Jsx}
            {swap}
            {bodyList3Jsx}
            {activate}
        </div>
    );
    return <MyCard body={body} />;
};

export default MyWallet;
