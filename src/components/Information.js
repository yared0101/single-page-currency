import MyCard from "./MyCard";
import Badge from "react-bootstrap/Badge";
const Information = () => {
    const bodyList = [
        {
            key: "oops 1",
            info: "20000",
        },
        {
            key: "Gas libido dordem",
            info: "10000",
        },
        {
            key: "Gas price",
            info: "important info",
        },
        {
            key: "Acetic fee for fee",
            info: "important info",
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
                    paddingLeft: "4ch",
                    paddingRight: "4ch",
                }}
            >
                {elem.info}
            </Badge>
        </div>
    ));
    const body = <div style={{ fontSize: "2ch" }}>{bodyListJsx}</div>;
    return <MyCard title="Information" titlePlace="center" body={body} />;
};

export default Information;
