import PropTypes from 'prop-types';

const Notofocation = ({ msg }) => {
  return <p>{msg}</p>;
};

Notofocation.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Notofocation;
