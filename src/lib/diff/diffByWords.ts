import diff from './diff'

const tokenize = (text: string) => {
  // Tokenizing can be optimized by combining 'replaceAll()',
  // 'split()' and 'flatMap()' in one loop
  return text
    .replaceAll('\n', '\n ')
    .split(' ')
    .flatMap((word) => {
      if (word.endsWith('\n')) {
        return word
      }

      return [word, ' ']
    })
}

const diffByWords = (text1: string, text2: string) => {
  return diff(tokenize(text1), tokenize(text2))
}

export default diffByWords
