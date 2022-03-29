import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyWallet from "./components/MyWallet";
import TradeHistory from "./components/TradeHistory";
import TradeHistory2 from "./components/TradeHistory2";
import LimitHolder from "./components/LimitHolder";
import Information from "./components/Information";
import ActivityFeed from "./components/ActivityFeed";
import MainLeft from "./components/MainLeft";
import { GiQueenCrown } from "react-icons/gi";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdGeneratingTokens } from "react-icons/md";
import {
    BsInfoCircle,
    BsReddit,
    BsDiscord,
    BsFacebook,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import { MdGamepad } from "react-icons/md";
import Logo from "./logo.jpg";
import LeftLogo from "./left-logo.jpg";
import { Button } from "react-bootstrap";
function App() {
    return (
        //#region layout
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "2ch",
                    }}
                >
                    <img src={Logo} alt="Logo" />
                    <h1 style={{ marginRight: "3ch", marginLeft: "1ch" }}>
                        ZooBDoo
                    </h1>
                    <div>
                        <a href="#" style={{ textDecoration: "none" }}>
                            Trade
                        </a>
                        {"  "}
                        <a href="#" style={{ textDecoration: "none" }}>
                            Play
                        </a>
                        {"  "}
                        <a href="#" style={{ textDecoration: "none" }}>
                            Earn
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "2ch",
                        justifyContent: "space-around",
                        gap: "2ch",
                        flexWrap: "wrap",
                    }}
                >
                    <GiQueenCrown color="gold" size={25} /> Bots
                    <FcCurrencyExchange color="blue" size={25} /> NFT
                    <MdGeneratingTokens color="purple" size={25} /> Tokens
                    <MdGamepad color="yellow" size={25} /> Game
                    <BsInfoCircle color="blue" size={25} /> About
                    <Button
                        variant="outline-success"
                        style={{ color: "white" }}
                    >
                        Activate
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <img
                    src={Logo}
                    alt="logo
                
                "
                />
                <img src={LeftLogo} alt="rect logo" />
            </div>
            <Container>
                <Row className="top">
                    <Col className="main-left" md={4}>
                        <MainLeft />
                    </Col>
                    <Col className="main-right" md={8}>
                        <MyWallet />
                        <TradeHistory />
                        <TradeHistory2 />
                    </Col>
                </Row>
                <Row className="mid">
                    <Col className="main-left">
                        <LimitHolder />
                    </Col>
                    <Col className="main-right">
                        <Information />
                    </Col>
                </Row>
                <Row className="bottom">
                    <Col md={12}>
                        <ActivityFeed />
                    </Col>
                </Row>
            </Container>
            <div
                class="me-card"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginLeft: "0",
                    marginBottom: "0",
                    borderWidth: "0",
                }}
            >
                <div
                    style={{
                        diplay: "flex",
                        flexDirection: "column",
                        gap: "4ch",
                        marginLeft: "10%",
                    }}
                >
                    <img src={Logo} alt="Logo" />
                    <br />
                    <br />
                    <p>
                        We make it possible for users to obtain a power house
                        token that isn't in the hands of anyone, but the
                        community
                    </p>
                    <BsReddit size={25} />
                    <BsDiscord size={25} />
                    <BsFacebook size={25} />
                    <BsInstagram size={25} />
                    <BsTwitter size={25} />
                </div>
                <div
                    style={{
                        marginRight: "10%",
                    }}
                >
                    <div display={{ diplay: "flex", gap: "2ch" }}>
                        <span style={{ marginRight: "3ch" }}>Home</span>
                        <span style={{ marginRight: "3ch" }}>About</span>
                        <span>Terms of Use</span>
                    </div>
                    <br />
                    <br />
                    <div display={{ diplay: "flex", gap: "2ch" }}>
                        <span style={{ marginRight: "3ch" }}>Support</span>
                        <span style={{ marginRight: "3ch" }}>FAQ's</span>
                        <span>Privacy</span>
                    </div>
                    <br />
                    <br />
                    <div display={{ diplay: "flex", gap: "2ch" }}>
                        <span style={{ marginRight: "3ch" }}>Contact</span>
                        <span style={{ marginRight: "3ch" }}>White Paper</span>
                    </div>
                </div>
            </div>
        </div>

        //#endregion
    );
}

export default App;
