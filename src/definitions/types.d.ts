import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants/languages'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface TranslatorState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  translatedText: string
  loading: boolean
}

export type TranslatorAction =
  | { type: 'SWITCH_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE'; payload: Language }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_TRANSLATED_TEXT'; payload: string }
