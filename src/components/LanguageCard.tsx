import { ChangeEvent } from 'react'
// import debounce from 'just-debounce-it' // npm install just-debounce-it

import { LanguageSelector } from './LanguageSelector'
import { type Props } from '../definitions/types'
import { SectionType } from '../definitions/types.d'

import './languageCard.css'

type LanguageCardProp = Props & {
  loading?: boolean
  setText: (payload: string) => void
}

function getPlaceHolder({
  type,
  loading,
}: {
  type: SectionType
  loading?: boolean
}) {
  if (loading === true) return 'Translating...'
  if (type === SectionType.From) return 'Enter text to translate'
  if (type === SectionType.To) return 'Traduction'
}

export function LanguageCard({
  type,
  value,
  onChange,
  setText,
  loading,
}: LanguageCardProp) {
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    // debounce((text: string) => setText(text), 500)
    setText(text)
  }
  return (
    <section className="bg-[hsl(var(--secondary-background))] h-full p-4 rounded-xl">
      <header className="flex gap-2">
        <span className="place-content-center text-[hsl(var(--muted-foreground))]">
          From:{' '}
        </span>
        <LanguageSelector
          type={type}
          value={value}
          onChange={onChange}
        ></LanguageSelector>
      </header>
      <div>
        <textarea
          placeholder={getPlaceHolder({ type, loading })}
          disabled={type === 'to'}
          className="w-full h-screen max-h-[50vh] focus:outline-none mt-4 resize-none bg-transparent"
          onChange={handleTextChange}
        ></textarea>
      </div>
    </section>
  )
}
