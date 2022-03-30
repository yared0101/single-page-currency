import PropTypes from "prop-types";
import EmptyComponent from "./EmptyComponent";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import Button from "react-bootstrap/Button";
/**
 * @param {string[]} param0
 * tab change is a function handler for tab change(when a tab pressd )
 */
const MyCard = ({
    tabs,
    body,
    tabChange,
    selectedIndex,
    title,
    titlePlace,
    style,
}) => {
    let tabsStuff = tabs?.map((elem, index) => (
        <Tab eventKey={`${index}`} title={elem} key={index}>
            {body}
        </Tab>
    ));

    return (
        <div className="me-card" style={style}>
            {title && (
                <div
                    style={{
                        textAlign: titlePlace,
                    }}
                >
                    {title}
                    <hr />
                </div>
            )}
            {tabsStuff ? (
                <Tabs
                    id="controlled-tab-example"
                    activeKey={`${selectedIndex}`}
                    onSelect={(k) => tabChange(Number(k))}
                    className="mb-3 scroll-tab"
                    scroll=""
                >
                    {tabsStuff}
                </Tabs>
            ) : undefined}
            {!tabsStuff && body}
        </div>
    );
};
MyCard.defaultProps = {
    body: <EmptyComponent />,
    tabChange: (index) => console.log(index),
    selectedIndex: 0,
    titlePlace: "left",
};

MyCard.propTypes = {
    body: PropTypes.any,
    tabChange: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string),
    selectedIndex: PropTypes.number,
    title: PropTypes.any,
    titlePlace: PropTypes.string,
};
export default MyCard;
