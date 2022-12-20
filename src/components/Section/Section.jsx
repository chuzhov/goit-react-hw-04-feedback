import PropTypes from 'prop-types';

const Section = ({ title, motto, children }) => {
  //const Section = ( props ) => {
  return (
    <>
      <h2>{title}</h2>
      {motto && <p>{motto}</p>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  motto: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
