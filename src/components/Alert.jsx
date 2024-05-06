import PropTypes from 'prop-types';


const Alert = ({ children, color }) => {
    return (
        <>
      <div className={`alert alert-${color} my-2`}>{children}</div>
       </>
    );
};
Alert.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
};

export default Alert;