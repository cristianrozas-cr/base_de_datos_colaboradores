import PropTypes from 'prop-types';


const Alert = ({ children, color }) => {
    return <div className={`alert alert-${color} m-2 w-75`}>{children}</div>
};
Alert.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
};

export default Alert;