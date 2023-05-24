import React, {useState} from 'react'
import classes from './Cards.module.scss'
import Button from '../../base/Button/Button'
import InGameTabs from '../../common/InGameTabs/InGameTabs'
import {getActiveActivationTokens, makeImageCardUrl} from '../../../utils/utils'
import {Card, Fighters, gameActions, SKILL_NAMES, SkillName} from '../../../store/gameReducer'
import FighterItem from '../../common/FighterItem/FighterItem'
import ImageButton from '../../icons/Icons'
import {useDispatch, useSelector} from 'react-redux'
import Scroll from '../../base/Scroll/Scroll'

const Cards = () => {
  const dispatch = useDispatch()
  const {rounds, currentRound, warBand} = useSelector(({game}) => game)
  const {language} = useSelector(({settings}) => settings)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isCardShownFullScreen, setIsCardShownFullScreen] = useState(false)

  const currentRoundObj = rounds[currentRound]
  const activationTokens = currentRoundObj?.activationTokens
  const activeActivationTokens = getActiveActivationTokens(activationTokens)
  const activeActivationTokensCount = activeActivationTokens.length

  const fighters: Fighters = warBand.fighters

  const onHpControlButtonClick = (increase = true) => {
    const {healthPoints} = currentCardObj
    if (increase) {
      dispatch(gameActions.updateCard(currentRound, currentCardIndex, {
        healthPoints: healthPoints + 1
      }))
    } else {
      if (healthPoints) {
        dispatch(gameActions.updateCard(currentRound, currentCardIndex, {
          healthPoints: healthPoints - 1
        }))
      }
    }
  }

  const applySkill = (skillName: SkillName) => {
    if (activeActivationTokensCount) {
      let activationTokenActiveIndex = -1

      for (let i = activationTokens.length - 1; i >= 0; i--) {
        if (activationTokens[i].isActive) {
          activationTokenActiveIndex = i
          break
        }
      }

      if (activationTokenActiveIndex !== -1) {
        dispatch(gameActions.updateActivationToken(
          currentRound,
          activationTokenActiveIndex,
          {isActive: false})
        )
        dispatch(gameActions.updateCard(currentRound, currentCardIndex, {
          [skillName]: {
            applied: true
          }
        }))
      }
    }
  }
  const revokeSkill = (skillName: SkillName) => {
    dispatch(
      gameActions.updateCard(currentRound, currentCardIndex, {
        [skillName]: false
      })
    )
  }

  const setCurrentCardInspireStatus = (flag: boolean) => {
    dispatch(
      gameActions.updateCard(currentRound, currentCardIndex, {
        isInspired: flag
      })
    )
  }

  const toggleCardFullScreen = () => {
    setIsCardShownFullScreen(!isCardShownFullScreen)
  }

  const currentCardObj: Card = fighters[currentCardIndex]
  let canApplyDefenceOrDodge
  let canApplyMoveAndAttack
  let canApplyMove
  let canRevokeDefenceOrDodge
  let canRevokeAttack
  let canRevokeMove
  let canInspireCard
  let cardImageSrc
  let name = ""
  let description = ""
  let isInspired = false

  if (currentCardObj) {
    const {move, attack, defend, dodge } = currentCardObj

    canApplyDefenceOrDodge = activeActivationTokensCount && !defend.applied
      && !dodge.applied && !attack.applied && !move.applied
    canApplyMoveAndAttack = activeActivationTokensCount && !attack.applied && !move.applied
    canApplyMove = activeActivationTokensCount && !attack.applied && !move.applied
    canRevokeDefenceOrDodge = defend.applied && dodge.applied
    canRevokeAttack = attack.applied
    canRevokeMove = move.applied
    canInspireCard = currentCardObj.cardInspiredName !== "none";

    name = currentCardObj.name
    description = currentCardObj.description
    isInspired = currentCardObj.isInspired

    if (isInspired) {
      cardImageSrc = makeImageCardUrl(currentCardObj.cardInspiredName, language)
    } else {
      cardImageSrc = makeImageCardUrl(currentCardObj.cardName, language)
    }
  }
  
  const cardElements = fighters.map((item: Card, i: number) => {
    return <FighterItem
      item={item}
      key={`fighter-${i}`}
      isFocused={currentCardIndex === i}
      onClick={() => {
        setCurrentCardIndex(i)
      }}
    />
  })

  return (
    <div className={classes.root}>

      <div className={classes.top}>
        <div className={classes.characters}>
          {cardElements}
        </div>
      </div>

      <div className={classes.middle}>
        {
          (currentCardObj)
            ? <>
              <div className={classes.card}>
                <div className={classes.left}>
                  <Button theme="secondary" disabled={!canInspireCard} onClick={() => {
                    setCurrentCardInspireStatus(!isInspired)
                  }}>
                    <ImageButton
                      size="tiny"
                      className={classes.actionButton}
                      disabled={!canInspireCard}
                      srcDisabled="ic_condition_inspired_inactive"
                      srcDefault={
                        (isInspired)
                          ? "ic_condition_inspired_active"
                          : "ic_condition_inspired"
                      }
                    />
                  </Button>
                  <Button theme="secondary"
                          disabled={!canRevokeMove && !canRevokeAttack}
                          onClick={() => {
                            revokeSkill(SKILL_NAMES.MOVE)
                            revokeSkill(SKILL_NAMES.ATTACK)
                          }}
                  >
                    <ImageButton
                      size="tiny"
                      className={classes.actionButton}
                      srcDefault={
                        (canRevokeMove && canRevokeAttack)
                          ? 'ic_condition_out_of_actions_active'
                          : 'ic_condition_out_of_moves_active'}
                      srcDisabled="ic_condition_out_of_actions"
                      disabled={!canRevokeMove && !canRevokeAttack}
                    />
                  </Button>
                  <Button theme="secondary"
                          disabled={!canRevokeDefenceOrDodge}
                          onClick={() => {
                            revokeSkill(SKILL_NAMES.DEFEND)
                            revokeSkill(SKILL_NAMES.DODGE)
                          }}
                  >
                    <ImageButton
                      size="tiny"
                      className={classes.actionButton}
                      srcDefault="ic_condition_on_defensive_active"
                      srcDisabled="ic_condition_on_defensive"
                      disabled={!canRevokeDefenceOrDodge}
                    />
                  </Button>
                </div>
                <div className={classes.cardContainer}>
                  <img onClick={toggleCardFullScreen} src={cardImageSrc} alt={name}/>
                </div>
                <div className={classes.right}>
                  <Button
                    onClick={() => {
                      onHpControlButtonClick(true)
                    }}
                    theme="secondary"
                  >+</Button>
                  <div className={classes.healthPoints}>{currentCardObj.healthPoints}</div>
                  <Button
                    disabled={!currentCardObj.healthPoints}
                    onClick={() => {
                      onHpControlButtonClick(false)
                    }}
                    theme="secondary"
                  >-</Button>
                </div>
              </div>
              <div className={classes.actions}>
                <ImageButton
                  className={classes.actionButton}
                  srcDefault="ic_action_defense"
                  srcDisabled="ic_activation_is_forbidden"
                  disabled={!canApplyDefenceOrDodge}
                  onClick={() => {
                    applySkill(SKILL_NAMES.DEFEND)
                    applySkill(SKILL_NAMES.DODGE)
                  }}
                />
                <ImageButton
                  className={classes.actionButton}
                  srcDefault="ic_condition_out_of_actions"
                  srcDisabled="ic_action_attack_forbidden"
                  disabled={!canApplyMoveAndAttack}
                  onClick={() => {
                    applySkill(SKILL_NAMES.MOVE)
                    applySkill(SKILL_NAMES.ATTACK)
                  }}
                />
                <ImageButton
                  className={classes.actionButton}
                  srcDefault="ic_moves"
                  srcDisabled="ic_action_movement"
                  disabled={!canApplyMove}
                  onClick={() => {
                    applySkill(SKILL_NAMES.MOVE)
                  }}
                />
              </div>
            </>
            : ''
        }
      </div>

      <div className={classes.bottom}>
        <InGameTabs/>
      </div>

      {
        (isCardShownFullScreen)
          ? (
            <div className={classes.cardFullScreenContainer}>
              <div className={classes.cardFullScreenTitle}>{name}</div>
              <div className={classes.cardFullScreenImageContainer}>
                <img onClick={toggleCardFullScreen} src={cardImageSrc} alt={name}/>
              </div>
              <Scroll>
                <p className={classes.cardFullScreenDescription}>{description}</p>
              </Scroll>
            </div>
          )
          : ''
      }
    </div>
  )
}

export default Cards

export type WarBand = {
  name: string
  icon: string
  description: string
  fighters: number[]
}

export type Fighter = {
  name: string
  fighters: number[]
  iconName: string
  cardName: string
  description: string
  cardInspiredName: string
  descriptionInspired: string
  healthPoints: number
  defenceStyle: string
  movementDistance: number
  defenceValue: number
  nameInspired: string
  movementDistanceInspired: number
  defenceValueInspired: number
  id: number
}