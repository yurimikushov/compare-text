import type { Token } from 'lib/diff/types'

type Diff = {
  text1Changes: Array<Token>
  text2Changes: Array<Token>
}

export type { Diff }
