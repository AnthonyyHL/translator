import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { LanguageCard } from './components/LanguageCard'

import { useTranslatorReducer } from './hooks/useTranslatorReducer'

import { AUTO_LANGUAGE } from './constants/languages'
import { SectionType } from './definitions/types.d'
import { SwitchIcon } from './components/icons/SwitchIcon'

import './App.css'

function App() {
  const {
    fromLanguage,
    toLanguage,
    loading,
    switchLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setTranslatedText,
  } = useTranslatorReducer()

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
            setText={setTranslatedText}
            loading={loading}
          ></LanguageCard>
        </Col>
      </Row>
    </Container>
  )
}

export default App
