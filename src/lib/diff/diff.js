import buildLCS from './buildLCS'

const token = (type, value) => ({
  added: type === 'added',
  removed: type === 'removed',
  value,
})

const added = (value) => token('added', value)
const removed = (value) => token('removed', value)
const unchanged = (value) => token('unchanged', value)

const diff = (tokens1, tokens2) => {
  const result = []

  const lcs = buildLCS(tokens1, tokens2)

  let i = tokens1.length
  let j = tokens2.length

  while (i !== 0 || j !== 0) {
    if (i === 0) {
      result.push(added(tokens2[j - 1]))
      j--
    } else if (j === 0) {
      result.push(removed(tokens1[i - 1]))
      i--
    } else if (tokens1[i - 1] === tokens2[j - 1]) {
      result.push(unchanged(tokens1[i - 1]))
      i--
      j--
    } else if (lcs[i - 1][j] <= lcs[i][j - 1]) {
      result.push(added(tokens2[j - 1]))
      j--
    } else {
      result.push(removed(tokens1[i - 1]))
      i--
    }
  }

  return result.reverse()
}

export default diff
