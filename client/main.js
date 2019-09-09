import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import App from './../imports/App';
import { Players, calculatePlayersPositions } from './../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();
    let positionedPlayers = calculatePlayersPositions(players);
    ReactDOM.render(
      <App players={positionedPlayers} />,
      document.getElementById('root')
    );
  });
});
