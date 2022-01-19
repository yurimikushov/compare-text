import { useState } from 'react'
import useDiff from 'hooks/useDiff'
import getExampleTexts from './utils/getExampleTexts'

const useDiffer = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const { text1Changes, text2Changes, handleDiff, handleResetDiff } = useDiff()

  const handleChangeText1 = (value) => {
    handleResetDiff()
    setText1(value)
  }

  const handleChangeText2 = (value) => {
    handleResetDiff()
    setText2(value)
  }

  const handleDiffByWords = () => {
    handleTrimAndDiff(true)
  }

  const handleDiffByLines = () => {
    handleTrimAndDiff(false)
  }

  const handleTrimAndDiff = (byWords) => {
    setText1((text1) => text1.trim())
    setText2((text2) => text2.trim())
    handleDiff(text1.trim(), text2.trim(), byWords)
  }

  const handleFillOutExampleTexts = () => {
    handleResetDiff()

    const { text1, text2 } = getExampleTexts()

    setText1(text1)
    setText2(text2)
  }

  return {
    text1,
    text2,
    text1Changes,
    text2Changes,
    handleChangeText1,
    handleChangeText2,
    handleDiffByWords,
    handleDiffByLines,
    handleFillOutExampleTexts,
  }
}

export default useDiffer
