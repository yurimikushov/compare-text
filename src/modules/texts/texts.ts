import { writable } from 'svelte/store'
import type { Texts } from './model'
import getExampleTexts from './utils/getExampleTexts'

const createTexts = () => {
  const { subscribe, set } = writable<Texts>({
    text1: '',
    text2: ''
  })

  return {
    subscribe,
    set,
    fillInExample: () => set(getExampleTexts())
  }
}

const texts = createTexts()

export default texts
