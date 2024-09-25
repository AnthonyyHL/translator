export interface TranslatorState {
  fromLanguage: string
  toLanguage: string
  fromText: string
  translatedText: string
  loading: boolean
}

export type TranslatorAction =
  | { type: 'SWITCH_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: string }
  | { type: 'SET_TO_LANGUAGE'; payload: string }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_TRANSLATED_TEXT'; payload: string }
