import { AUTO_LANGUAGE } from '../constants/languages'
import { TranslatorAction, TranslatorState } from '../definitions/types.d'

export const translatorInitialState: TranslatorState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  translatedText: '',
  loading: false,
}

export function translatorReducer(
  state: TranslatorState,
  action: TranslatorAction,
) {
  const { type } = action

  switch (type) {
    case 'SWITCH_LANGUAGES':
      if (state.fromLanguage === AUTO_LANGUAGE) return state
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        fromLanguage: action.payload,
      }
    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: action.payload,
      }
    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: action.payload === '' ? false : true,
        fromText: action.payload,
        translatedText: '',
      }
    case 'SET_TRANSLATED_TEXT':
      return {
        ...state,
        loading: false,
        translatedText: action.payload,
      }
  }
}
