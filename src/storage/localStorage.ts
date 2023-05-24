import {Round, WarBand} from '../store/gameReducer'

const key = 'GAME/COMMON-DATA'

export type SaveGameType = {
  currentRound: number
  currentWarBand: number
  warBand: WarBand
  rounds: Round[]
}

export const saveGame = (data: SaveGameType) => {
  localStorage.setItem(key, JSON.stringify(data))
}

// @ts-ignore
export const loadGame = (): SaveGameType | null => {
  const data = localStorage.getItem(key)
  let dataParsed = null

  if (data) {
    try {
      dataParsed = JSON.parse(data)
    } catch(err) {}
  }

  return dataParsed
}