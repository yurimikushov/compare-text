import { useState } from 'react'
import Layout from 'layouts/Layout'
import TextArea from 'components/TextArea'
import Button from 'components/Button'

const HomePage = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const handleDiff = () => {
    alert('diff')
  }

  return (
    <Layout className='h-screen '>
      <div className='flex flex-col items-center gap-6'>
        <div className='w-full flex gap-5'>
          <TextArea
            className='w-1/2 max-h-[35rem]'
            value={text1}
            rows={12}
            placeholder='Введите текст'
            onChange={setText1}
          />
          <TextArea
            className='w-1/2 max-h-[35rem]'
            value={text2}
            rows={12}
            placeholder='Введите текст'
            onChange={setText2}
          />
        </div>
        <Button onClick={handleDiff}>Сравнить</Button>
      </div>
    </Layout>
  )
}

export default HomePage
