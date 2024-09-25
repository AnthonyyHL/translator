import 'bootstrap/dist/css/bootstrap.min.css'

import { useTranslatorReducer } from './hooks/useTranslatorReducer'

import './App.css'

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    translatedText,
    loading,
    switchLanguages,
    handleFromLanguageChange,
    handleToLanguageChange,
  } = useTranslatorReducer()

  return (
    <>
      <h1>Translator clone</h1>
      {/* Test */}
      <input type="text" onChange={handleFromLanguageChange} />
      <span>fromLanguage {fromLanguage}</span>
      <br />
      <input type="text" onChange={handleToLanguageChange} />
      <span>toLanguage {toLanguage}</span>
      <br />
      <button onClick={switchLanguages}>Switch</button>
    </>
  )
}

export default App
