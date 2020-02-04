import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from './routes';

/*
import store from './store/store'
  store.dispatch(someInitialDataToRequest);
*/

const App = ({ isLoading, getData }) => (
  <Router>
    <Routes />
  </Router>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

export default connect(
  mapStateToProps,
  null,
)(App);
