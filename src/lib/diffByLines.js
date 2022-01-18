import { diffLines } from 'diff'

const diffByLines = (text1, text2) => {
  const diffByLines = []

  const diffs = diffLines(text1, text2, {
    newlineIsToken: true,
  })

  diffs.forEach(({ count, added, removed, value }) => {
    if (count === 1) {
      if (value !== '\n') {
        diffByLines.push({
          added,
          removed,
          value,
        })
      }
    } else {
      diffByLines.push(
        ...value
          .split('\n')
          .map((value) => ({
            added,
            removed,
            value,
          }))
          .filter(({ value }) => value !== '')
      )
    }
  })

  return {
    diff: diffByLines,
    text1Changes: diffByLines.filter(
      ({ added, removed }) => removed || (!added && !removed)
    ),
    text2Changes: diffByLines.filter(
      ({ added, removed }) => added || (!added && !removed)
    ),
  }
}

export default diffByLines
