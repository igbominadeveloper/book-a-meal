import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../helpers/persistUser';
import { userSignOut } from '../../actions/userActions';

const ConnectedLogo = ({ text, className, goHome }) => {
  const handleClick = () => {
    goHome();
    removeUser();
  };
  return (
    <NavLink
      to="/"
      onClick={handleClick}
      activeClassName="active"
    >
      <h1 className={className}>{text}</h1>
    </NavLink>
  );
};

ConnectedLogo.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  goHome: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(userSignOut()),
});

const Logo = connect(null, mapDispatchToProps)(ConnectedLogo);

export default Logo;