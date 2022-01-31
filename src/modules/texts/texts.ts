import { writable } from 'svelte/store'
import { TEXT_MAX_LENGTH } from '.'
import type { Texts } from './model'
import getExampleTexts from './utils/getExampleTexts'

const createTexts = () => {
  const { subscribe, set, update } = writable<Texts>({
    text1: '',
    text2: ''
  })

  const sliceAcceptableTextsAndSet = ({ text1, text2 }: Texts) => {
    set({
      text1: text1.slice(0, TEXT_MAX_LENGTH),
      text2: text2.slice(0, TEXT_MAX_LENGTH)
    })
  }

  const switchTexts = () => {
    update(({ text1, text2 }) => {
      const temp = text1

      return {
        text1: text2,
        text2: temp
      }
    })
  }

  return {
    subscribe,
    set: sliceAcceptableTextsAndSet,
    fillInExample: () => sliceAcceptableTextsAndSet(getExampleTexts()),
    switchTexts
  }
}

const texts = createTexts()

export default texts
