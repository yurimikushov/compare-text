import { writable } from 'svelte/store'
import { diffByLines, diffByWords, splitDiff } from 'lib/diff'
import type { Diff } from './model'

const createDiff = () => {
  const { subscribe, set } = writable<Diff>({ left: [], right: [] })

  return {
    subscribe,
    buildDiff: (text1: string, text2: string) => {
      if (text1.length === 0 && text2.length === 0) {
        set({ left: [], right: [] })
        return
      }

      const linesDiff = diffByLines(text1, text2)
      const { left, right } = splitDiff(linesDiff)

      const diff: Diff = { left: [], right: [] }

      for (let i = 0; i < left.length; i++) {
        diff.left.push({
          ...left[i],
          dummy: left[i].value.length === 0,
          childs: []
        })

        diff.right.push({
          ...right[i],
          dummy: right[i].value.length === 0,
          childs: []
        })

        const wordsDiff = diffByWords(left[i].value, right[i].value)

        wordsDiff.forEach((token) => {
          if (token.value.length > 0 && token.removed) {
            diff.left[i].childs.push(token)
          } else if (token.value.length > 0 && token.added) {
            diff.right[i].childs.push(token)
          } else {
            diff.left[i].childs.push(token)
            diff.right[i].childs.push(token)
          }
        })
      }

      set(diff)
    },
    reset: () => set({ left: [], right: [] })
  }
}

const diff = createDiff()

export default diff
