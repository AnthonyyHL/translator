type HandleTranslateProps = {
  fromCode: string
  toCode: string
  text: string
  setTranslatedText: (text: string) => void
}

export const handleTranslate = async ({
  fromCode,
  toCode,
  text,
  setTranslatedText,
}: HandleTranslateProps) => {
  try {
    const response = await fetch(
      `https://anthleon.pythonanywhere.com/translate?text=${encodeURIComponent(text)}&fromText=${encodeURIComponent(fromCode)}&toText=${encodeURIComponent(toCode)}`,
    )
    const data = await response.json()
    setTranslatedText(data.translation)
  } catch (error) {
    console.error('Error al traducir:', error)
  }
}
