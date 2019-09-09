import React, { Component } from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import Player from './Player';
import FlipMove from 'react-flip-move';

class App extends Component {
  render() {
    const { players } = this.props;
    const playersList =
      players &&
      players.map(player => {
        return <Player key={player._id} player={player} />;
      });

    return (
      <div>
        <TitleBar title="Score Keep App" />
        <div className="wrapper">
          <FlipMove maintainContainerHeight>
            {players.length > 0 ? (
              playersList
            ) : (
              <p className="item" style={{ fontStyle: 'italic' }}>
                Please add player to start
              </p>
            )}
          </FlipMove>
          <AddPlayer />
        </div>
      </div>
    );
  }
}

export default App;
