import { useState } from 'react'
import diffByWords from 'lib/diff/diffByWords'
import diffByLines from 'lib/diff/diffByLines'

const useDiff = () => {
  const [{ text1Changes, text2Changes }, setDiff] = useState({
    text1Changes: [],
    text2Changes: [],
  })

  const handleDiff = (text1, text2, byWords = false) => {
    const diff = byWords ? diffByWords(text1, text2) : diffByLines(text1, text2)

    setDiff({
      text1Changes: diff.filter(
        ({ added, removed }) => removed || (!added && !removed)
      ),
      text2Changes: diff.filter(
        ({ added, removed }) => added || (!added && !removed)
      ),
    })
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