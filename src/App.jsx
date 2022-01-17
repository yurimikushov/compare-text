import { useState } from 'react'
import TextArea from 'components/TextArea'

const App = () => {
  const [text, setText] = useState('')

  return (
    <div className='p-5 flex gap-3'>
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
  )
}

export default App
