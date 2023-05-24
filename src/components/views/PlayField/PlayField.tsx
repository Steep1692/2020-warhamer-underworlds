import React from 'react'
import styles from "./PlayField.module.scss";
import {Link} from "react-router-dom";
import {ROUTES} from "../../App";
import InGameTabs from "../../common/InGameTabs/InGameTabs";
import Button from '../../base/Button/Button'
import ActivationToken from '../../common/ActivationToken/ActivationToken'
import {useDispatch, useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next';
import InnerBorderRadiusWrapper from '../../base/InnerBorderRadiusWrapper/InnerBorderRadiusWrapper'
import {gameActions} from '../../../store/gameReducer'
import ImageButton from '../../icons/Icons'
import {makeImageIconUrl} from '../../../utils/utils'

const PlayField = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const {rounds, currentRound} = useSelector(({game}) => game);

  const currentRoundObj = rounds[currentRound];
  const roundsCount = rounds.length;
  const activationTokens = currentRoundObj?.activationTokens;

  const canIncreaseRound = currentRound < roundsCount - 1;
  const canDecreaseRound = currentRound > 0;

  const gloryPointsWastedCount = rounds.reduce((accum, {gloryPoints}) => {
    return accum + gloryPoints.wasted.count;
  }, 0);
  const gloryPointsNotWastedCount = rounds.reduce((accum, {gloryPoints}) => {
    return accum + gloryPoints.notWasted.count;
  }, 0);

  const increaseGloryPointsWasted = () => {
    dispatch(
      gameActions.updateGloryPoints(currentRound, {
        wasted: {
          count: gloryPointsWastedCount + 1
        }
      })
    );
  }
  const decreaseGloryPointsWasted = () => {
    dispatch(
      gameActions.updateGloryPoints(currentRound, {
        wasted: {
          count: gloryPointsWastedCount - 1
        }
      })
    );
  }
  const increaseGloryPointsNotWasted = () => {
    dispatch(
      gameActions.updateGloryPoints(currentRound, {
        notWasted: {
          count: gloryPointsNotWastedCount + 1
        }
      })
    );
  }
  const decreaseGloryPointsNotWasted = () => {
    dispatch(
      gameActions.updateGloryPoints(currentRound, {
        notWasted: {
          count: gloryPointsNotWastedCount - 1
        }
      })
    );
  }

  console.log(`%c CONSOLE LOG!!!`, 'background: black; color: red;')
  console.log({currentRound})

  const onGloryPointsWastedClick = () => {
    if (gloryPointsWastedCount) {
      decreaseGloryPointsWasted()
      increaseGloryPointsNotWasted()
    }
  };

  const onGloryPointsNotWastedClick = () => {
    if (gloryPointsNotWastedCount) {
      decreaseGloryPointsNotWasted()
      increaseGloryPointsWasted()
    }
  };

  const updateGloryPoints = (increase = true) => {
    if (increase) {
      increaseGloryPointsNotWasted()
    } else {
      decreaseGloryPointsNotWasted()
    }
  };

  const updateRound = (increase: boolean) => {
    if (increase) {
      if (canIncreaseRound) {
        dispatch(gameActions.changeRound(currentRound + 1));
      }
    } else {
      if (canDecreaseRound) {
        dispatch(gameActions.changeRound(currentRound - 1));
      }
    }
  };

  const activationTokenElements = activationTokens?.map(({isActive}, i) => (
    <ActivationToken
      onClick={() => {
        dispatch(gameActions.updateActivationToken(currentRound, i, {
          isActive: !isActive
        }))
      }}
      key={i}
      isActive={isActive}
    />
  ));

  return (
    <div className={styles.root}>

      <div className={styles.top}>
        <ImageButton
          className={styles.buttonChangeRound}
          srcDefault="ic_previous_round"
          srcHover="ic_previous_round_pressed"
          srcDisabled="ic_previous_round_inactive"
          disabled={!canDecreaseRound}
          onClick={() => updateRound(false)}
        />
        <InnerBorderRadiusWrapper className={styles.round}>
          <span>{t("round")} {currentRound + 1}</span>
        </InnerBorderRadiusWrapper>
        <ImageButton
          className={styles.buttonChangeRound}
          srcDefault="ic_next_round"
          srcHover="ic_next_round_pressed"
          srcDisabled="ic_next_round_inactive"
          disabled={!canIncreaseRound}
          onClick={() => updateRound(true)}
        />
      </div>

      <div className={styles.activationTokens}>
        {activationTokenElements}
      </div>

      <div className={styles.statistics}>
        <div className={styles.gloryPointsControls}>
          <Button
            theme="secondary"
            onClick={() => {
              updateGloryPoints(true);}
            }
          >+</Button>
          <Button
            theme="secondary"
            disabled={!gloryPointsNotWastedCount}
            onClick={() => {
              updateGloryPoints(false);}
            }
          >-</Button>
        </div>
        <div className={styles.gloryPoints}>
          <Button
            disabled={!gloryPointsNotWastedCount}
            className={styles.gloryPoint}
            onClick={() => {
              onGloryPointsNotWastedClick();
            }}
          >
            <img
              src={makeImageIconUrl("ic_glory_point")}
              alt={`${t("gloryPointTokens")} {t("wasted")}`}
            />
            {gloryPointsNotWastedCount}</Button>
          <Button
            disabled={!gloryPointsWastedCount}
            className={styles.gloryPoint}
            onClick={() => {
              onGloryPointsWastedClick();
            }}
          >
            <img
              src={makeImageIconUrl("ic_glory_point_spent")}
              alt={`${t("gloryPointTokens")} {t("notWasted")}`}
            />
            {gloryPointsWastedCount}
          </Button>
        </div>
      </div>

      <div className={styles.bottom}>
        <Link to={ROUTES.GAME_END.path} className={styles.buttonEndGame}><Button theme="third">{t("endGame")}</Button></Link>
        <InGameTabs/>
      </div>

    </div>
  )
};

export default PlayField;