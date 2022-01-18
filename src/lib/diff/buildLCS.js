const buildLCS = (tokens1, tokens2) => {
  const n = tokens1.length
  const m = tokens2.length

  if (n === 0 || m === 0) {
    return [[]]
  }

  const lcs = []

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) {
        if (!lcs[i]) {
          lcs[i] = []
        }

        lcs[i][j] = 0
      } else if (tokens1[i - 1] === tokens2[j - 1]) {
        lcs[i][j] = 1 + lcs[i - 1][j - 1]
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1])
      }
    }
  }

  return lcs
}

export default buildLCS
