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
                id="home"
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
                        <a href="#home" style={{ textDecoration: "none" }}>
                            Trade
                        </a>
                        {"  "}

                        <a href="#home" style={{ textDecoration: "none" }}>
                            Play
                        </a>
                        {"  "}

                        <a href="#home" style={{ textDecoration: "none" }}>
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
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                height: 10,
                                minWidth: 25,
                            }}
                        ></div>
                        <div
                            className="huge-only"
                            style={{
                                height: 25,
                                minWidth: 10,
                                maxWidth: 10,
                                marginLeft: 20,
                                backgroundColor: "orange",
                            }}
                        ></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            className="huge-only"
                            style={{
                                height: 10,
                                minWidth: 25,
                                backgroundColor: "orange",
                            }}
                        ></div>
                        <img src={Logo} alt="logo" />
                        <h1
                            className="huge-only"
                            style={{ marginRight: "3ch", marginLeft: "1ch" }}
                        >
                            ZooBDoo
                        </h1>
                        <h5
                            className="small-only"
                            style={{
                                display: "none",
                                marginRight: "1ch",
                                marginLeft: "1ch",
                            }}
                        >
                            ZooBDoo
                        </h5>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                height: 10,
                                minWidth: 25,
                            }}
                        ></div>
                        <div
                            className="huge-only"
                            style={{
                                height: 25,
                                minWidth: 10,
                                maxWidth: 10,
                                marginRight: 20,
                                backgroundColor: "orange",
                            }}
                        ></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={LeftLogo} alt="rect logo" />

                        <div
                            className="huge-only"
                            style={{
                                height: 10,
                                minWidth: 25,
                                backgroundColor: "orange",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <Container>
                <Row className="top">
                    <Col
                        className="main-left"
                        md={{ offset: 1, span: 10 }}
                        lg={{ span: 4, offset: 0 }}
                    >
                        <MainLeft />
                    </Col>
                    <Col
                        className="main-right"
                        md={{ span: 10, offset: 1 }}
                        lg={{ span: 8, offset: 0 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <MyWallet />
                        <TradeHistory />
                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <TradeHistory2 />
                        </div>
                    </Col>
                </Row>
                <Row className="mid">
                    <Col
                        className="main-left"
                        md={{ span: 10, offset: 1 }}
                        lg={{ span: 6, offset: 0 }}
                    >
                        <LimitHolder />
                    </Col>
                    <Col
                        className="main-right"
                        md={{ span: 10, offset: 1 }}
                        lg={{ span: 6, offset: 0 }}
                    >
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
                className="me-card"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginLeft: "0",
                    marginBottom: "0",
                    flexWrap: "wrap",
                    borderWidth: "0",
                }}
            >
                <div
                    style={{
                        diplay: "flex",
                        flexDirection: "column",
                        gap: "4ch",
                        marginLeft: "10%",
                        paddingBottom: 50,
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
                    <BsReddit style={{ marginRight: 10 }} size={25} />
                    <BsDiscord style={{ marginRight: 10 }} size={25} />
                    <BsFacebook style={{ marginRight: 10 }} size={25} />
                    <BsInstagram style={{ marginRight: 10 }} size={25} />
                    <BsTwitter style={{ marginRight: 10 }} size={25} />
                </div>
                <div
                    className="about-section"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        // alignItems: "center",
                        marginTop: 20,
                        flex: 1,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "2ch",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ marginRight: "3ch" }}>Home</div>
                        <div style={{ marginRight: "3ch" }}>Support</div>
                        <div style={{ marginRight: "3ch" }}>Contact</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "2ch",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ marginRight: "3ch" }}>About</div>
                        <div style={{ marginRight: "3ch" }}>FAQ's</div>
                        <div style={{ marginRight: "3ch" }}>White Paper</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "2ch",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <div>Terms of Use</div>
                        <div>Privacy</div>
                    </div>
                </div>
            </div>
        </div>

        //#endregion
    );
}

export default App;
