import React from 'react';

import { Store } from '../../store/store.jsx';
import Actions from '../../actions/Actions.jsx';

export default class ResetPlayers extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Store.dispatch(Actions.resetPlayers());
  }

  render() {
    return (
      <div className="details">
        <button className="inc reset" onClick={this.handleClick}>
          Reset Player Data
        </button>
      </div>
    );
  }
};
