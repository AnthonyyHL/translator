import { LanguageSelector } from './LanguageSelector'

import { type Props } from '../definitions/types'

import './languageCard.css'

export function LanguageCard({ type, value, onChange }: Props) {
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
          placeholder={
            type === 'from' ? 'Enter text to translate' : 'Translated text'
          }
          disabled={type === 'to'}
          className="w-full h-screen max-h-[50vh] focus:outline-none mt-4 resize-none bg-transparent"
        ></textarea>
      </div>
    </section>
  )
}
