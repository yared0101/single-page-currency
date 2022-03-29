import MyCard from "./MyCard";
const ActivityFeed = () => {
    const bodyList = [
        {
            key: "Login",
            date: new Date(),
        },
        {
            key: "Login",
            date: new Date(),
        },
    ];
    const bodyListJsx = bodyList.map((elem, index) => (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1ch",
                marginTop: "3ch",
                marginBottom: "3ch",
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 5,
            }}
            key={index}
        >
            <span>{elem.key}</span>
            <span>
                {elem.date.toLocaleDateString()}{" "}
                {elem.date.toLocaleTimeString()}
            </span>
        </div>
    ));
    const body = <div style={{}}>{bodyListJsx}</div>;
    return <MyCard title="ActivityFeed" titlePlace="center" body={body} />;
};

export default ActivityFeed;
