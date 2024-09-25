import { useReducer } from 'react'

import {
  translatorIntialState,
  translatorReducer,
} from '../reducers/translatorReducer'

export function useTranslatorReducer() {
  const [state, dispatch] = useReducer(translatorReducer, translatorIntialState)
  const { fromLanguage, toLanguage, fromText, translatedText, loading } = state

  const switchLanguages = () => {
    dispatch({ type: 'SWITCH_LANGUAGES' })
  }

  const handleFromLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return
    const { value } = e.target
    dispatch({ type: 'SET_FROM_LANGUAGE', payload: value })
  }

  const handleToLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return
    const { value } = e.target
    dispatch({ type: 'SET_TO_LANGUAGE', payload: value })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    translatedText,
    loading,
    switchLanguages,
    handleFromLanguageChange,
    handleToLanguageChange,
  }
}
