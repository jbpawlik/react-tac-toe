import { newGame, gameover, switchPlayer, winner, movePlayer } from "./actions";
import { isWinner, isDraw } from '../../utils/game';

const checkWinner = (board, player) => (dispatch) => {
  if (isWinner(board, player)) {
    dispatch(winner(player));
    dispatch(gameover());
  } else if (isDraw(board)) {
    dispatch(winner(0));
    dispatch(gameover());
  }
};

const playTurn = (player, row, col) => (dispatch) => {
  let nextPlayer;

  switch (player) {
    case 1:
      nextPlayer = 2;
      break;
    case 2:
      nextPlayer = 1;
      break;
    default:
      break;
  }

  dispatch(movePlayer(player, row, col));
  dispatch(switchPlayer(nextPlayer));
}

export {
  newGame,
  checkWinner,
  playTurn
};