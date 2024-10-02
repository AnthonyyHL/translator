import { ChangeEvent, useCallback } from 'react'
import debounce from 'just-debounce-it' // npm install just-debounce-it

import { LanguageSelector } from './LanguageSelector'

import { SectionType, type Props } from '../definitions/types.d'

import './languageCard.css'

type LanguageCardProp = Props & {
  loading?: boolean
  translatedText?: string
  setText: (payload: string) => void
}

export function LanguageCard({
  type,
  value,
  onChange,
  translatedText,
  setText,
  loading,
}: LanguageCardProp) {
  function getPlaceHolder({
    type,
    loading,
  }: {
    type: SectionType
    loading?: boolean
  }) {
    if (loading === true) return 'Translating...'
    if (type === SectionType.From) return 'Enter text to translate'
    if (type === SectionType.To && translatedText === '') {
      return 'Traduction'
    }
    return translatedText
  }

  const debouncedSetText = useCallback(
    debounce((text: string) => {
      setText(text)
    }, 750),
    [setText],
  )

  return (
    <form className="bg-[hsl(var(--secondary-background))] h-full p-4 rounded-xl">
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
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            debouncedSetText(e.target.value)
          }}
        ></textarea>
      </div>
      {type === 'from' && (
        <footer className="w-full flex justify-end">
          <button>Click</button>
        </footer>
      )}
    </form>
  )
}
