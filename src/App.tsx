import { useState, useReducer } from 'react'
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
  const { type } = action

  switch (type) {
    case 'SWITCH_LANGUAGES':
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)

  // proof
  const switchLanguages = () => {
    dispatch({ type: 'SWITCH_LANGUAGES' })
  }

  return (
    <>
      <h1>Translator clone</h1>
      <span>fromLanguage {state.fromLanguage}</span>
      <span>toLanguage {state.toLanguage}</span>
      <button onClick={switchLanguages}>Switch</button>
    </>
  )
}

export default App
