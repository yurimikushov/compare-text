import { writable } from 'svelte/store'
import { diffByLines, diffByWords, splitDiff } from 'lib/diff'
import type { Diff } from './model'

const createDiff = () => {
  const { subscribe, set } = writable<Diff>({ left: [], right: [] })

  return {
    subscribe,
    buildDiff: (text1: string, text2: string) => {
      const linesDiff = diffByLines(text1, text2)
      const { left, right } = splitDiff(linesDiff)

      const result: Diff = { left: [], right: [] }

      for (let i = 0; i < left.length; i++) {
        result.left.push({
          ...left[i],
          dummy: left[i].value.length === 0,
          childs: []
        })

        result.right.push({
          ...right[i],
          dummy: right[i].value.length === 0,
          childs: []
        })

        const wordsDiff = diffByWords(left[i].value, right[i].value)

        wordsDiff.forEach((token) => {
          if (token.value.length > 0 && token.removed) {
            result.left[i].childs.push(token)
          } else if (token.value.length > 0 && token.added) {
            result.right[i].childs.push(token)
          } else {
            result.left[i].childs.push(token)
            result.right[i].childs.push(token)
          }
        })
      }

      set(result)
    },
    reset: () => set({ left: [], right: [] })
  }
}

const diff = createDiff()

export default diff
