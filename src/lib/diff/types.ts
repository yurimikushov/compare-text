export type Token = {
  added: boolean
  removed: boolean
  unchanged: boolean
  value: string
}

export type TokenType = 'added' | 'removed' | 'unchanged'
