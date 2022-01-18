import { useState } from 'react'
import diffByLines from 'lib/diffByLines'

const useDiff = () => {
  const [{ text1Changes, text2Changes }, setDiff] = useState({
    text1Changes: [],
    text2Changes: [],
  })

  const handleDiff = (text1, text2) => {
    setDiff(diffByLines(text1, text2))
  }

  const handleResetDiff = () => {
    setDiff({ text1Changes: [], text2Changes: [] })
  }

  return {
    text1Changes,
    text2Changes,
    handleDiff,
    handleResetDiff,
  }
}

export default useDiff
