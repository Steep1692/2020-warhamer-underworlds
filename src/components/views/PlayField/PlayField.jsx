import React, {useState} from "react";
import * as styles from "./PlayField.module.scss";
import * as t from "../../../assets/lang/ru.json";
import WideButton from "../../base/WideButton/WideButton";
import SquadItem from "../../common/SquadItem/SquadItem";
import Button from "../../base/Button/Button";
import ButtonSecondary from "../../base/ButtonSecondary/ButtonSecondary";
import {Link} from "react-router-dom";
import {ROUTES} from "../../App";

const PlayField = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [round, setRound] = useState(1);

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <button onClick={() => setRound(round - 1)}>Left</button>
        <span className={styles.labelRound}>{t.round} {round}</span>
        <button onClick={() => setRound(round + 1)}>Right</button>
      </div>
      <div className={styles.center}>
        <div className={styles.row}>
          <SquadItem/>
          <SquadItem/>
          <SquadItem/>
          <SquadItem/>
        </div>
        <div className={styles.statistics}>
          <div className={styles.counter}>
            <ButtonSecondary onClick={() => setCounter(counter + 1)}>+</ButtonSecondary>
            <ButtonSecondary onClick={() => setCounter(counter - 1)}>-</ButtonSecondary>
          </div>
          <div className={styles.wastes}>
            <div className={styles.item} onClick={() => {
              setCounter2(counter2 + 1);
              setCounter(counter - 1);
            }}>{counter}</div>
            <div className={styles.item} onClick={() => {
              setCounter2(counter2 - 1);
              setCounter(counter + 1);
            }}>{counter2}</div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link to={ROUTES.GAME_END.path} className={styles.buttonEndGame}><WideButton>{t.endGame}</WideButton></Link>
        <div className={styles.tabs}>
          <Link to={ROUTES.CARDS.path}><ButtonSecondary>Cards</ButtonSecondary></Link>
          <Link to={ROUTES.PLAY_FIELD.path}><ButtonSecondary>Field</ButtonSecondary></Link>
          <Link to={ROUTES.MAIN.path}><ButtonSecondary>Menu</ButtonSecondary></Link>
        </div>
      </div>
    </div>
  )
};

export default PlayField;