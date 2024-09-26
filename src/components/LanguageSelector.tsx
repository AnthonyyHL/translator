import { Language, FromLanguage } from '@/definitions/types'
import { SUPPORTED_LANGUAGES } from '../constants/languages'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props =
  | {
      type: 'from'
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | { type: 'to'; value: Language; onChange: (language: Language) => void }

export function LanguageSelector({ onChange }: Props) {
  console.log('onChange')

  const handleChange = (language: FromLanguage | Language) => {
    console.log(language)
    onChange(language as Language)
  }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger name="from-language-option-list" className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => {
          return (
            <SelectItem key={code} id={code} value={code}>
              {language}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
