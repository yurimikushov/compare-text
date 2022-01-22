import { writable } from 'svelte/store'
import { diffByLines, diffByWords } from 'lib/diff'
import type { Diff } from './model'

const createDiff = () => {
  const { subscribe, set } = writable<Diff>({
    text1Changes: [],
    text2Changes: []
  })

  return {
    subscribe,
    diffByLines: (text1: string, text2: string) => {
      set(diffByLines(text1, text2))
    },
    diffByWords: (text1: string, text2: string) => {
      set(diffByWords(text1, text2))
    },
    reset: () => set({ text1Changes: [], text2Changes: [] })
  }
}

const diff = createDiff()

export default diff
