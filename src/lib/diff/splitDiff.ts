import type { Token } from './types'

const dummyToken = {
  removed: false,
  added: false,
  unchanged: false,
  value: ''
}

const splitDiff = (diff: Array<Token>) => {
  const left: Array<Token> = []
  const right: Array<Token> = []

  for (let i = 0; i < diff.length; i++) {
    const token = diff[i]

    if (token.removed) {
      left.push(token)
    }

    if (token.added) {
      right.push(token)
    }

    if (token.unchanged || i == diff.length - 1) {
      const pad = Math.max(left.length, right.length)
      const addLeft = Math.max(0, pad - left.length)
      const addRight = Math.max(0, pad - right.length)

      left.push(...Array<Token>(addLeft).fill({ ...dummyToken }))
      right.push(...Array<Token>(addRight).fill({ ...dummyToken }))
    }

    if (token.unchanged) {
      left.push(token)
      right.push(token)
    }
  }

  return { left, right }
}

export default splitDiff
