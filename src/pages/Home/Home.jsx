import { useState } from 'react'
import useDiff from 'hooks/useDiff'
import Layout from 'layouts/Layout'
import TextArea from 'components/TextArea'
import Button from 'components/Button'

const HomePage = () => {
  const [text1, setText1] = useState(
    `I am the very model of a modern Major-General,
I've information vegetable, animal, and mineral,
I know the kings of England, and I quote the fights historical,
From Marathon to Waterloo, in order categorical.
`
  )
  const [text2, setText2] = useState(
    `I am the very model of a cartoon individual,
My animation's comical, unusual, and whimsical,
I'm quite adept at funny gags, comedic theory I have read,
I know the kings of England, and I quote the fights historical,
From wicked puns and stupid jokes to anvils that drop on your head.
`
  )

  const { text1Changes, text2Changes, handleDiff, handleResetDiff } = useDiff(
    text1,
    text2
  )

  const handleChangeText1 = (value) => {
    handleResetDiff()
    setText1(value)
  }

  const handleChangeText2 = (value) => {
    handleResetDiff()
    setText2(value)
  }

  const handleTrimAndDiff = () => {
    setText1((text1) => text1.trim())
    setText2((text2) => text2.trim())
    handleDiff()
  }

  return (
    <Layout className='h-screen '>
      <div className='flex flex-col items-center gap-6'>
        <div className='w-full flex gap-5'>
          <TextArea
            className='w-1/2 h-96'
            value={text1}
            withHighlightingChanges
            valueChanges={text1Changes}
            placeholder='Введите текст'
            onChange={handleChangeText1}
          />
          <TextArea
            className='w-1/2 h-96'
            value={text2}
            withHighlightingChanges
            valueChanges={text2Changes}
            placeholder='Введите текст'
            onChange={handleChangeText2}
          />
        </div>
        <Button onClick={handleTrimAndDiff}>Сравнить</Button>
      </div>
    </Layout>
  )
}

export default HomePage
