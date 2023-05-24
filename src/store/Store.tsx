import {applyMiddleware, combineReducers, compose, createStore, Dispatch} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {gameReducer} from './gameReducer'
import {settingsReducer} from './settingsReducer'
import gameSaga from './saga'

const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer
})

export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true,
  traceLimit: 25
})) || compose

let sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(gameSaga)

// Infer actions object to get types of actions
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
export type ThunkType = (...args: any) => (dispatch: Dispatch) => Promise<void>