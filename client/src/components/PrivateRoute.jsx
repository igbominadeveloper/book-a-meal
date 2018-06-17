import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ConnectedPrivateRoute = ({ loggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    loggedIn ?
      <Component {...props} />
      :
      <Redirect to="/signin" />)}
  />
);

ConnectedPrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  /* eslint react/forbid-prop-types: 0 */
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute);

export default PrivateRoute;