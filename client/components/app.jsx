import React from 'react';
import { Link } from 'react-router';

import PlayerList from './players/PlayerList.jsx';
import ResetPlayers from './players/ResetPlayers.jsx';
import SelectPlayer from './players/SelectPlayer.jsx';

export default class App extends React.Component {
  resetPrompt() {
    if (_.isEmpty(this.props.players)) {
      return (
        <div className="subtitle">Click Reset Players to generate player data.</div>
      )
    }
  }

  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Leaderboard</h1>
        <ResetPlayers/>
        {this.resetPrompt()}
        <div>
          <PlayerList
            players = {this.props.players}
            selectedId = {this.props.selectedPlayer._id} />
        </div>
        <SelectPlayer { ...this.props } />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  players: React.PropTypes.object,
  selectedPlayer: React.PropTypes.object,
  selectedName: React.PropTypes.string,
  errorMessage: React.PropTypes.string
}
