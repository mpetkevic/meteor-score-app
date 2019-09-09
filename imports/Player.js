import React, { Component } from 'react';
import { Players } from './api/players';
import './Player.scss';

export default class Player extends Component {
  onRemovePlayer = id => {
    Players.remove({
      _id: id
    });
  };

  onAddOne = id => {
    Players.update(
      { _id: id },
      {
        $inc: { score: 1 }
      }
    );
  };
  onRemoveOne = id => {
    Players.update(
      { _id: id },
      {
        $inc: { score: -1 }
      }
    );
  };
  render() {
    const { player } = this.props;
    let itemClassName = `item item--position-${player.rank}`;
    return (
      <div className={itemClassName} key={player._id}>
        <div className="player">
          <div>
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">
              {player.position} place - {player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button
              className="button button--round"
              onClick={() => this.onRemoveOne(player._id)}
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={() => this.onAddOne(player._id)}
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={() => this.onRemovePlayer(player._id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}
