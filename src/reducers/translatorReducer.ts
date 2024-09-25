import { TranslatorAction, TranslatorState } from '../definitions/types.d'

export const translatorIntialState: TranslatorState = {
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
        loading: true,
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
