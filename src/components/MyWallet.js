import { BsCashCoin } from "react-icons/bs";
import qrIMG from "../qr.png";
import MyCard from "./MyCard";
import Col from "react-bootstrap/Col";
const MyWallet = () => {
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
                justifyContent: "flex-start",
                margin: 20,
                flexWrap: "wrap",
            }}
        >
            <Col md={12} lg={6} style={{ textAlign: "center" }}>
                <img src={qrIMG} alt="QR CODE" />
            </Col>
            <Col
                md={12}
                lg={6}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 30,
                    alignItems: "center",
                    flexDirection: "column",
                    flex: 1,
                }}
            >
                <span className="font-weight-light">
                    This is your zoobdoo address
                </span>
                <span>112jsjw892n2ee2ww9333928u9234928ef</span>
                <span
                    className="font-weight-light"
                    style={{ textAlign: "center" }}
                >
                    Share this with anyone and they can send you payments
                </span>
            </Col>
        </div>
    );
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
