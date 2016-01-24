import React from 'react';
import {connect} from 'react-redux';

import App from './App.jsx';

class AppContainer extends React.Component {
  componentWillUnmount() {
  }

  render() {
    //debugger // checkout this.props with debugger!
    return (<App { ...this.props } />);
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    selectedPlayer: state.userInterface.selectedPlayer,
    statusMessage: state.userInterface.statusMessage,
    ddpMessages: state.userInterface.ddpMessages
  };
}

export default connect(mapStateToProps)(AppContainer);
