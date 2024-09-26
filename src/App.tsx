// import 'bootstrap/dist/css/bootstrap.min.css'

import { useTranslatorReducer } from './hooks/useTranslatorReducer'

import './App.css'
import { AUTO_LANGUAGE } from './constants/languages'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
  const {
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
  } = useTranslatorReducer()

  return (
    <>
      <h1>Translator clone</h1>
      {/* Test */}
      <span>fromLanguage {fromLanguage}</span>
      <LanguageSelector
        type="from"
        value={fromLanguage}
        onChange={setFromLanguage}
      ></LanguageSelector>

      <br />

      <span>toLanguage {toLanguage}</span>
      <LanguageSelector
        type="to"
        value={toLanguage}
        onChange={setToLanguage}
      ></LanguageSelector>

      <br />

      <button
        disabled={fromLanguage === AUTO_LANGUAGE}
        onClick={switchLanguages}
      >
        Switch
      </button>
    </>
  )
}

export default App
