import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { LanguageCard } from './components/LanguageCard'

import { useTranslatorReducer } from './hooks/useTranslatorReducer'
import { handleTranslate } from './services/translateService'

import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constants/languages'
import { SectionType } from './definitions/types.d'
import { SwitchIcon } from './components/icons/SwitchIcon'

import './App.css'
import { useEffect } from 'react'

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

  useEffect(() => {
    if (fromText === '' || !fromText) return
    const fromCode: string =
      fromLanguage === AUTO_LANGUAGE
        ? 'auto'
        : SUPPORTED_LANGUAGES[fromLanguage ?? 'es']
    const toCode: string = SUPPORTED_LANGUAGES[toLanguage ?? 'en']
    handleTranslate({ fromCode, toCode, text: fromText, setTranslatedText })
  }, [fromText, fromLanguage, toLanguage])

  return (
    <Container className="w-full h-full">
      <Row className="d-inline-flex justify-center">
        <h1>Translator clone</h1>

        <Col className="col-auto">
          <LanguageCard
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
            setText={setFromText}
          ></LanguageCard>
        </Col>

        <Col className="col-auto">
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={switchLanguages}
          >
            <SwitchIcon />
          </button>
        </Col>

        <Col className="col-auto">
          <LanguageCard
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
            translatedText={translatedText}
            setText={setTranslatedText}
            loading={loading}
          ></LanguageCard>
        </Col>
      </Row>
    </Container>
  )
}

export default App
