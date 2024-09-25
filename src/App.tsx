import { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const intialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  translatedText: '',
  loading: false,
}

function reducer(state, action) {
  const { type, payload } = action

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
        fromLanguage: payload,
      }
    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: payload,
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)

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

  return (
    <>
      <h1>Translator clone</h1>
      {/* Test */}
      <input type="text" onChange={handleFromLanguageChange} />
      <span>fromLanguage {state.fromLanguage}</span>
      <br />
      <input type="text" onChange={handleToLanguageChange} />
      <span>toLanguage {state.toLanguage}</span>
      <br />
      <button onClick={switchLanguages}>Switch</button>
    </>
  )
}

export default App
