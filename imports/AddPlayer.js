import React, { Component } from 'react';
import { Players } from './api/players';
import './AddPlayer.scss';

export default class AddPlayer extends Component {
  state = {
    name: ''
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.name !== '') {
      this.onAddPlayer(this.state.name);
      this.setState({ name: '' });
    }
  };

  onAddPlayer = name => {
    Players.insert({
      name,
      score: 0
    });
  };
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.onFormSubmit}>
          <input
            className="form__input"
            type="text"
            placeholder="Enter Player name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
          <button className="button" type="submit">
            Add Player
          </button>
        </form>
      </div>
    );
  }
}
