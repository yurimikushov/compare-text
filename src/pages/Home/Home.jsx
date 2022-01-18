import { useState } from 'react'
import useDiff from 'hooks/useDiff'
import Layout from 'layouts/Layout'
import TextArea from 'components/TextArea'
import Button from 'components/Button'
import getExampleTexts from './utils/getExampleTexts'

const HomePage = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const { text1Changes, text2Changes, handleDiff, handleResetDiff } = useDiff()

  const handleChangeText1 = (value) => {
    handleResetDiff()
    setText1(value)
  }

  const handleChangeText2 = (value) => {
    handleResetDiff()
    setText2(value)
  }

  const handleDiffByWords = () => {
    handleTrimAndDiff(true)
  }

  const handleDiffByLines = () => {
    handleTrimAndDiff(false)
  }

  const handleDisplayExample = () => {
    handleResetDiff()

    const { text1, text2 } = getExampleTexts()

    setText1(text1)
    setText2(text2)

    handleTrimAndDiff(text1, text2, true)
  }

  const handleTrimAndDiff = (byWords) => {
    setText1((text1) => text1.trim())
    setText2((text2) => text2.trim())
    handleDiff(text1.trim(), text2.trim(), byWords)
  }

  return (
    <Layout className='h-screen'>
      <div className='flex gap-3'>
        <Button appearance='primary' onClick={handleDiffByWords}>
          Сравнить по словам
        </Button>
        <Button appearance='primary' onClick={handleDiffByLines}>
          Сравнить по строчно
        </Button>
        <Button appearance='secondary' onClick={handleDisplayExample}>
          Показать пример
        </Button>
      </div>
      <div className='mt-3 w-full flex gap-5'>
        <TextArea
          className='w-1/2 h-96'
          value={text1}
          withHighlightingChanges
          valueChanges={text1Changes}
          placeholder='Введите или вставьте текст'
          onChange={handleChangeText1}
        />
        <TextArea
          className='w-1/2 h-96'
          value={text2}
          withHighlightingChanges
          valueChanges={text2Changes}
          placeholder='Введите или вставьте текст'
          onChange={handleChangeText2}
        />
      </div>
    </Layout>
  )
}

export default HomePage
