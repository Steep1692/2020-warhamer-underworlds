import React, {useEffect} from 'react'
import classes from './App.module.scss'
import Menu from './views/Menu/Menu'
import ChooseSquad from './views/ChooseSquad/ChooseSquad'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import GameEnd from './views/GameEnd/GameEnd'
import PlayField from './views/PlayField/PlayField'
import Cards, {Fighter, WarBand} from './views/Cards/Cards'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {gameActions} from '../store/gameReducer'

export const ROUTES = {
  MAIN: {
    path: '/'
  },
  CHOOSE_SQUAD: {
    path: '/choose-squad'
  },
  GAME_END: {
    path: '/game-end'
  },
  PLAY_FIELD: {
    path: '/play-field'
  },
  CARDS: {
    path: '/cards'
  }
}

function App() {
  const dispatch = useDispatch()
  const {i18n} = useTranslation()
  const { t: tw } = useTranslation("warBands")
  const { t: tf } = useTranslation("fighters")
  const warBands: WarBand[] = tw("items", { returnObjects: true })
  const fighters: Fighter[] = tf("items", { returnObjects: true })
  const {language} = useSelector(({settings}) => settings)

  // Get fighters of the current war band.
  const {currentWarBand: currentWarBandIndex} = useSelector(({game}) => game)
  const currentWarBand = warBands[currentWarBandIndex];
  const currentWarBandFightersIds = currentWarBand.fighters;
  const currentWarBandFighters = fighters.filter(({id}) => {
    return currentWarBandFightersIds.includes(id)
  })
  // ========

  useEffect(() => {
    // Set chosen war band fighters from the json to the Redux.
    dispatch(gameActions.setFighters(currentWarBandFighters.map(({id,
                                                                   name,
                                                                   healthPoints,
                                                                   iconName,
                                                                   cardInspiredName,
                                                                   cardName,
                                                                   description}) => {
      return  {
        id,
        name,
        healthPoints,
        iconName,
        cardInspiredName,
        cardName,
        description,
        isInspired: false,
        move: {applied: false},
        attack: {applied: false},
        defend: {applied: false},
        dodge: {applied: false}
      }
    })))

  }, [currentWarBand])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <Router>
      <div className={classes.content}>
        <Switch>
          <Route path={ROUTES.CARDS.path} render={() => <Cards/>}/>
          <Route path={ROUTES.CHOOSE_SQUAD.path} render={() => <ChooseSquad/>}/>
          <Route path={ROUTES.GAME_END.path} render={() => <GameEnd/>}/>
          <Route path={ROUTES.PLAY_FIELD.path} render={() => <PlayField/>}/>
          <Route exact path={ROUTES.MAIN.path} render={() => <Menu/>}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
