import { useReducer } from 'react'

import {
  translatorInitialState,
  translatorReducer,
} from '../reducers/translatorReducer'
import { Language, FromLanguage } from '../definitions/types'

export function useTranslatorReducer() {
  const [state, dispatch] = useReducer(
    translatorReducer,
    translatorInitialState,
  )
  const { fromLanguage, toLanguage, fromText, translatedText, loading } = state

  const switchLanguages = () => {
    dispatch({ type: 'SWITCH_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: Language) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setTranslatedText = (payload: Language) => {
    dispatch({ type: 'SET_TRANSLATED_TEXT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    translatedText,
    loading,
    switchLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setTranslatedText,
  }
}
