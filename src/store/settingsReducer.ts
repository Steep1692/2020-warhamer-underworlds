import {InferActionsTypes} from './Store'

const initialState: SettingsReducerState = {
  language: "ru",
}

export const settingsReducer = (state = initialState, action: ActionTypes): SettingsReducerState => {
  switch (action.type) {
    case 'SETTINGS-REDUCER/SET-LANGUAGE': {
      return {
        ...state,
        language: action.language
      }
    }
    default: {
      return state
    }
  }
}

export const settingsActions = {
  setLanguage: (language: typeof initialState.language) => ({
    type: 'SETTINGS-REDUCER/SET-LANGUAGE',
    language
  } as const),
}

type ActionTypes = InferActionsTypes<typeof settingsActions>

export type SettingsReducerState = {
  language: "en" | "ru"
};