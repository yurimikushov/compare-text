import { useState } from 'react'
import TextArea from 'components/TextArea'
import Button from 'components/Button'

const App = () => {
  const [text, setText] = useState('')
  const handleDiff = () => {
    alert('diff')
  }

  return (
    <div className='m-5 flex flex-col items-center gap-10'>
      <div className='w-full flex gap-3'>
        <TextArea
          className='w-1/2'
          value={text}
          rows={12}
          placeholder='Введите текст'
          onChange={setText}
        />
        <TextArea
          className='w-1/2'
          value={text}
          rows={12}
          placeholder='Введите текст'
          onChange={setText}
        />
      </div>
      <Button onClick={handleDiff}>Сравнить</Button>
    </div>
  )
}

export default App
