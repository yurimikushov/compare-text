// Mark right side white space as changed if the next word is changed too
const markRightSideWhiteSpaceAsChanged = (tokens) => {
  const result = []
  const n = tokens.length

  let i = 0

  while (i < n) {
    if (i === n) {
      result.push(tokens[i])
      i++
    } else if (i === n - 1 || i === n - 2) {
      if (
        (tokens[i].added || tokens[i].removed) &&
        tokens[i + 1].value === ' '
      ) {
        result.push(tokens[i], {
          ...tokens[i],
          value: ' ',
        })
        i += 2
      } else {
        result.push(tokens[i])
        i++
      }
    } else if (
      (tokens[i].added || tokens[i].removed) &&
      tokens[i + 1].value === ' ' &&
      (tokens[i + 2].added || tokens[i + 2].removed)
    ) {
      result.push(tokens[i], {
        ...tokens[i],
        value: ' ',
      })
      i += 2
    } else {
      result.push(tokens[i])
      i++
    }
  }

  return result
}

export default markRightSideWhiteSpaceAsChanged
