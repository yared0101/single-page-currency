import { BsCashCoin } from "react-icons/bs";
import qrIMG from "../qr.png";
import MyCard from "./MyCard";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useState } from "react";
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () {
            console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
            console.error("Async: Could not copy text: ", err);
        }
    );
}
const MyWallet = () => {
    const userToken = "1JiKTG96fYvQ6X8SMLnwk19pKpiWuzbUBR";

    const popover = (
        <Popover
            style={{ width: "90%" }}
            className="normal-card"
            id="popover-basic"
        >
            <Popover.Body style={{ color: "white" }}>
                {userToken} copied to clipboard
            </Popover.Body>
        </Popover>
    );
    const [selected, setSelected] = useState(0);
    const mainList = [
        {
            textLeft: "Total Transaction",
            textMid: "0",
            iconRight: <BsCashCoin />,
        },
        {
            textLeft: "Total Received",
            textMid: "0.00 BTC",
            iconRight: <BsCashCoin />,
        },
        {
            textLeft: "Total Sent",
            textMid: "0.00 BTC",
            iconRight: <BsCashCoin />,
        },
        {
            textLeft: "Final Balance",
            textMid: "0.00 BTC",
            iconRight: <BsCashCoin />,
        },
    ];
    const mainListJsx = mainList.map((elem, index) => (
        <div
            key={index}
            className="width-100"
            style={{
                borderBottom: "solid black 1px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "2ch",
                paddingBottom: "0",
                margin: "2ch",
                // paddingRight: "2ch",
            }}
        >
            <Col xs={4} style={{ textAlign: "left" }}>
                <span>{elem.textLeft}</span>
            </Col>
            <Col xs={4} style={{ textAlign: "center" }}>
                <span>{elem.textMid}</span>
            </Col>
            <Col xs={4} style={{ textAlign: "right" }}>
                <span>{elem.iconRight}</span>
            </Col>
        </div>
    ));
    const imageAndText = (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                margin: 20,
                flexWrap: "wrap",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <img className="huge-only" src={qrIMG} alt="QR CODE" />
                <img
                    className="small-only"
                    src={qrIMG}
                    width="100%"
                    alt="QR CODE"
                />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 30,
                    width: "100%",
                    marginLeft: 0,
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <span className="font-weight-light">
                    This is your zoobdoo address
                </span>
                <OverlayTrigger
                    rootClose
                    trigger="click"
                    placement="top"
                    overlay={popover}
                >
                    <div
                        className="token-overflow"
                        onClick={(e) => copyTextToClipboard(userToken)}
                        style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                        }}
                    >
                        {userToken}
                        <span
                            className="small-only"
                            style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                            (press to copy)
                        </span>
                    </div>
                </OverlayTrigger>
                <p
                    className="font-weight-light"
                    style={{ textAlign: "center" }}
                >
                    Share this with anyone and they can send you payments
                </p>
            </div>
        </div>
    ); // eslint-disable-next-line
    const musketeersArray = [
        {
            title: "Contact Address",
            key: "0xb47e...3bb",
        },
        {
            title: "Token Id",
            key: "3100",
        },
        {
            title: "BlockChain",
            key: "Ethereum",
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
            <span>{elem.title}</span>
            <span>{elem.key}</span>
        </div>
    ));
    return (
        <MyCard
            title={
                <span>
                    My Wallet{" "}
                    <small style={{ color: "lightgrey" }}>
                        Be your own bank
                    </small>
                </span>
            }
            tabs={[
                "Wallet Home",
                "My Transactions",
                "Send Money",
                "Receive Money",
                "Import/Export",
            ]}
            selectedIndex={selected}
            tabChange={setSelected}
            body={
                <div>
                    {mainListJsx}
                    {imageAndText}
                    {musketeersJsx}
                </div>
            }
        />
    );
};

export default MyWallet;
