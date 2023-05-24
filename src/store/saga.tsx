import { all, takeLatest, select, put } from 'redux-saga/effects'
import * as storageManager from '../storage/localStorage'
import {ActionType, gameActions} from './gameReducer'

function* saveGame () {
  const {rounds, currentWarBand, currentRound, warBand} = yield select(({game}) => game);
  storageManager.saveGame({
    rounds,
    currentRound,
    currentWarBand,
    warBand
  });
  console.log("game saved", {
    rounds,
    currentRound,
    currentWarBand
  });
}

function* loadGame () {
  const loadedData = storageManager.loadGame();

  if (loadedData) {
    yield put(gameActions.loadGameSuccess(loadedData))
    console.log("game loaded", loadedData)
  }
}

function* changeRound (action: ActionType) {
  const newRoundIndex = action.payload;

  yield put(gameActions.setCurrentRoundSuccess(newRoundIndex));
  yield put(gameActions.resetFightersSkills());
}

export default function* gameSaga() {
  yield all([
    takeLatest('GAME-REDUCER/SAVE-GAME', saveGame),
    takeLatest('GAME-REDUCER/LOAD-GAME', loadGame),

    takeLatest('GAME-REDUCER/SET-rounds', saveGame),
    takeLatest('GAME-REDUCER/UPDATE-ROUND', saveGame),
    takeLatest('GAME-REDUCER/UPDATE-CARD', saveGame),
    takeLatest('GAME-REDUCER/UPDATE-ACTIVATION-TOKEN', saveGame),
    takeLatest('GAME-REDUCER/SET-CURRENT-ROUND', saveGame),
    takeLatest('GAME-REDUCER/SET-CURRENT-WAR-BAND', saveGame),
    takeLatest('GAME-REDUCER/SET-GLORY-POINTS', saveGame),

    takeLatest('GAME-REDUCER/CHANGE-ROUND', changeRound),
  ])
};