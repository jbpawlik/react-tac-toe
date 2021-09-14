import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { gameOperations } from '../state/ducks/game';


const App = ({ player, playTurn}) => {
  const handleClick = () => {
    playTurn(player, 0, 1);
  };

  return (
    <div>
      <h2>Hello Tic Tac Toe!</h2>
      <p>
        Current Player is: {player}
      </p>
      <p>
        <button onClick={handleClick}>Make a move</button>
      </p>
    </div>
  );
};

const {number, func} = PropTypes;
App.propTypes = {
  player: number.isRequired,
  playTurn: func.isRequired
};

const mapStateToProps = state => {
const { gameState } = state;
  return {
    player: gameState.player,
    winner: gameState.winner
  }
}

const mapDispatchToProps = {
  playTurn: gameOperations.playTurn
};

export default connect(mapStateToProps, mapDispatchToProps)(App);