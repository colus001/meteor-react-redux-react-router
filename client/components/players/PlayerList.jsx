import React from 'react';

import PlayerItem from './PlayerItem.jsx';

export default class PlayerList extends React.Component {
  render() {
    if (!this.props.players) {
      return (
        <ul className="leaderboard">
          <h2>Loading...</h2>
          <h3>*Simulating* slow server to show optimistic UI</h3>
        </ul>
      );
    }

    let players = Object.keys(this.props.players).sort( (a,b) => {
      return this.props.players[b].score - this.props.players[a].score;
    });

    let isSelected = (_id) => {
      return _id === this.props.selectedId;
    }

    return (
      <ul className="leaderboard">
        {
          players.map((_id) => {
            return (
              <PlayerItem
                key={ _id }
                isSelected={ isSelected(_id) }
                player={ this.props.players[_id] } />
            );
          })
        }
      </ul>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.object,
  selectedId: React.PropTypes.string
}
