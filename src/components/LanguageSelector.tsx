import {
  SectionType,
  type Language,
  type FromLanguage,
  type Props,
} from '../definitions/types.d'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants/languages'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function LanguageSelector({ type, value, onChange }: Props) {
  const handleChange = (language: string) => {
    if (type === SectionType.From) {
      console.log('language:', language)
      onChange(language as FromLanguage)
    } else {
      onChange(language as Language)
    }
  }

  return (
    <Select onValueChange={handleChange} value={value}>
      <SelectTrigger name="from-language-option-list" className="w-[280px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        {type === SectionType.From && (
          <SelectItem value={AUTO_LANGUAGE}>Detect Language</SelectItem>
        )}
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => {
          return (
            <SelectItem key={code} value={code}>
              {language}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
