import { writable } from 'svelte/store'
import { TEXT_MAX_LENGTH } from '.'
import type { Texts } from './model'
import getExampleTexts from './utils/getExampleTexts'

const createTexts = () => {
  const { subscribe, set } = writable<Texts>({
    text1: '',
    text2: ''
  })

  const sliceAcceptableTextsAndSet = ({ text1, text2 }: Texts) => {
    set({
      text1: text1.slice(0, TEXT_MAX_LENGTH),
      text2: text2.slice(0, TEXT_MAX_LENGTH)
    })
  }

  return {
    subscribe,
    set: sliceAcceptableTextsAndSet,
    fillInExample: () => sliceAcceptableTextsAndSet(getExampleTexts())
  }
}

const texts = createTexts()

export default texts
