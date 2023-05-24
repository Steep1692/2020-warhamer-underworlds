import {InferActionsTypes} from './Store'
import {SaveGameType} from '../storage/localStorage'

const initialState: GameReducerState = {
  currentRound: 0,
  currentWarBand: 0,
  warBand: {
    fighters: []
  },
  rounds: [
    {
      activationTokens: [
        {isActive: true},
        {isActive: true},
        {isActive: true},
        {isActive: true}
      ],
      gloryPoints: {
        wasted: {
          count: 0
        },
        notWasted: {
          count: 0
        }
      }
    },
    {
      activationTokens: [
        {isActive: true},
        {isActive: true},
        {isActive: true},
        {isActive: true}
      ],
      gloryPoints: {
        wasted: {
          count: 0
        },
        notWasted: {
          count: 0
        }
      }
    },
    {
      activationTokens: [
        {isActive: true},
        {isActive: true},
        {isActive: true},
        {isActive: true}
      ],
      gloryPoints: {
        wasted: {
          count: 0
        },
        notWasted: {
          count: 0
        }
      }
    },
  ],
  isGameCanBeSaved: false
}

export const gameReducer = (state = initialState, action: ActionTypes): GameReducerState => {
  const updateItemInArray = <T>(array: T[], index: number, newPropertyValues: Partial<T>): T[] => {
    return array.map((obj: T, i) => {
      if (i === index) {
        obj = {
          ...obj,
          ...newPropertyValues
        }
      }

      return obj
    })
  }

  switch (action.type) {
    case 'GAME-REDUCER/SET-rounds': {
      return {
        ...state,
        rounds: [
          ...action.rounds
        ]
      }
    }
    case 'GAME-REDUCER/SET-CURRENT-ROUND-SUCCESS': {
      return {
        ...state,
        currentRound: action.payload
      }
    }
    case 'GAME-REDUCER/SET-FIGHTERS': {
      return {
        ...state,
        warBand: {
          ...state.warBand,
          fighters: action.payload
        }
      }
    }
    case 'GAME-REDUCER/SET-CURRENT-WAR-BAND': {
      return {
        ...state,
        currentWarBand: action.payload
      }
    }
    case 'GAME-REDUCER/UPDATE-ROUND': {
      const {index, newPropertyValues} = action.data

      return {
        ...state,
        rounds: [
          ...updateItemInArray<Round>(state.rounds, index, newPropertyValues)
        ]
      }
    }
    case 'GAME-REDUCER/UPDATE-CARD': {
      const {index, newPropertyValues} = action.data
      return {
        ...state,
        warBand: {
          ...state.warBand,
          fighters: [
            ...updateItemInArray<Card>(state.warBand.fighters, index, newPropertyValues)
          ]
        },
      }
    }
    case 'GAME-REDUCER/UPDATE-ACTIVATION-TOKEN': {
      const {roundIndex, index, newPropertyValues} = action.data
      const stateRounds = [...state.rounds]
      stateRounds[roundIndex].activationTokens = [
        ...updateItemInArray<ActivationToken>(stateRounds[roundIndex].activationTokens, index, newPropertyValues)
      ]

      return {
        ...state,
        rounds: stateRounds
      }
    }
    case 'GAME-REDUCER/SET-GLORY-POINTS': {
      const {roundIndex, newPropertyValues} = action.data
      const stateRounds = [...state.rounds]
      stateRounds[roundIndex].gloryPoints = {
        ...stateRounds[roundIndex].gloryPoints,
        ...newPropertyValues
      }

      return {
        ...state,
        rounds: stateRounds
      }
    }
    case 'GAME-REDUCER/RESET-GAME': {
      return {
        ...initialState
      }
    }
    case 'GAME-REDUCER/LOAD-GAME-SUCCESS': {
      return {
        ...initialState,
        rounds: action.data?.rounds,
        warBand: action.data?.warBand,
        currentRound: action.data?.currentRound,
        isGameCanBeSaved: true
      }
    }
    case 'GAME-REDUCER/RESET-FIGHTERS-SKILLS': {
      return {
        ...state,
        warBand: {
          ...state.warBand,
          fighters: state.warBand.fighters.map((item) => ({
            ...item,
            [SKILL_NAMES.MOVE]: { applied: false },
            [SKILL_NAMES.ATTACK]: { applied: false },
            [SKILL_NAMES.DEFEND]: { applied: false },
            [SKILL_NAMES.DODGE]: { applied: false },
          }))
        }
      }
    }
    default: {
      return state
    }
  }
}

export const gameActions = {
  setRounds: (rounds: Round[]) => ({
    type: 'GAME-REDUCER/SET-rounds',
    rounds
  } as const),
  updateRound: (index: number, newPropertyValues: Partial<Round>) => ({
    type: 'GAME-REDUCER/UPDATE-ROUND',
    data: {index, newPropertyValues}
  } as const),
  updateCard: (roundIndex: number, index: number, newPropertyValues: Partial<Card>) => ({
    type: 'GAME-REDUCER/UPDATE-CARD',
    data: {roundIndex, index, newPropertyValues}
  } as const),
  updateActivationToken: (roundIndex: number, index: number, newPropertyValues: Partial<ActivationToken>) => ({
    type: 'GAME-REDUCER/UPDATE-ACTIVATION-TOKEN',
    data: {roundIndex, index, newPropertyValues}
  } as const),
  setCurrentRoundSuccess: (payload: number) => ({
    type: 'GAME-REDUCER/SET-CURRENT-ROUND-SUCCESS',
    payload
  } as const),
  setFighters: (payload: Fighters) => ({
    type: 'GAME-REDUCER/SET-FIGHTERS',
    payload
  } as const),
  setCurrentWarBand: (payload: number) => ({
    type: 'GAME-REDUCER/SET-CURRENT-WAR-BAND',
    payload
  } as const),
  updateGloryPoints: (roundIndex: number, newPropertyValues: Partial<GloryPoints>) => ({
    type: 'GAME-REDUCER/SET-GLORY-POINTS',
    data: {roundIndex, newPropertyValues}
  } as const),
  resetGame: () => ({
    type: 'GAME-REDUCER/RESET-GAME',
  } as const),
  loadGame: (data: SaveGameType) => ({
    type: 'GAME-REDUCER/LOAD-GAME'
  } as const),
  loadGameSuccess: (data: SaveGameType) => ({
    type: 'GAME-REDUCER/LOAD-GAME-SUCCESS',
    data
  } as const),
  saveGame: () => ({
    type: 'GAME-REDUCER/SAVE-GAME',
  } as const),
  resetFightersSkills: () => ({
    type: 'GAME-REDUCER/RESET-FIGHTERS-SKILLS'
  } as const),
  changeRound: (payload: number) => ({
    type: 'GAME-REDUCER/CHANGE-ROUND',
    payload
  } as const),
}

type ActionTypes = InferActionsTypes<typeof gameActions>

export type ActionType = {
  type: string
  data: any
  payload: any
}

export type Fighters = Card[]

export type GameReducerState = {
  currentRound: number
  currentWarBand: number
  warBand: WarBand
  rounds: Round[]
  isGameCanBeSaved: boolean
};

export type WarBand = {
  fighters: Fighters
}

export type Round = {
  activationTokens: ActivationToken[]
  gloryPoints: GloryPoints
}

export type ActivationToken = {
  isActive: boolean
}

export const SKILL_NAMES = {
  MOVE: "move",
  ATTACK: "attack",
  DEFEND: "defend",
  DODGE: "dodge"
} as const

export type ValueOf<T> = T[keyof T];
export type SkillName = ValueOf<typeof SKILL_NAMES>

export type Card = {
  healthPoints: number
  name: string
  iconName: string
  cardInspiredName: string
  cardName: string
  description: string
  isInspired: boolean
  [SKILL_NAMES.MOVE]: Skill
  [SKILL_NAMES.ATTACK]: Skill
  [SKILL_NAMES.DEFEND]: Skill
  [SKILL_NAMES.DODGE]: Skill
}

export type GloryPoints = {
  wasted: {
    count: number
  },
  notWasted: {
    count: number
  }
}

export type Skill = {
  applied: boolean
}