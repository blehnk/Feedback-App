import PropTypes from 'prop-types';

function card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

card.defaultProps = {
  reverse: false,
};

card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default card;
