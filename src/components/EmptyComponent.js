import PropTypes from "prop-types";

const EmptyComponent = ({ text }) => {
    return <div>{text}</div>;
};
EmptyComponent.defaultProps = {
    text: "Sorry Nothing here",
};

EmptyComponent.propTypes = {
    text: PropTypes.string,
};
export default EmptyComponent;
