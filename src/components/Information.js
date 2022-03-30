import MyCard from "./MyCard";

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
        <div>
            <div
                className="huge-only"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "3ch",
                }}
                key={index}
            >
                <span>{elem.key}</span>
                <div
                    style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <input
                        type="text"
                        placeholder={elem.info}
                        style={{
                            width: "80%",
                            marginRight: "10px",
                            textAlign: "center",
                        }}
                    />
                    <span style={{ marginTop: "auto" }}>{elem.afterInput}</span>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                }}
                className="small-only width-50"
                key={index}
            >
                <div>{elem.key}</div>
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <input
                        type="text"
                        placeholder={elem.info}
                        style={{
                            width: "100%",
                            marginRight: "10px",
                            textAlign: "center",
                        }}
                    />
                </div>
            </div>
        </div>
    ));
    const body = <div style={{ fontSize: "2ch" }}>{bodyListJsx}</div>;
    return <MyCard title="Information" titlePlace="center" body={body} />;
};

export default Information;
