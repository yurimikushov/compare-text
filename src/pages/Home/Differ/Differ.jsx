import TextArea from 'components/TextArea'
import Button from 'components/Button'
import useDiffer from './hooks/useDiffer'

const MAX_TEXT_LENGTH = 2_000

const Differ = () => {
  const {
    text1,
    text2,
    text1Changes,
    text2Changes,
    handleChangeText1,
    handleChangeText2,
    handleDiffByWords,
    handleDiffByLines,
    handleFillOutExampleTexts,
  } = useDiffer()

  return (
    <>
      <div className='flex gap-3'>
        <Button appearance='primary' onClick={handleDiffByWords}>
          Сравнить по словам
        </Button>
        <Button appearance='primary' onClick={handleDiffByLines}>
          Сравнить по строчно
        </Button>
        <Button appearance='secondary' onClick={handleFillOutExampleTexts}>
          Заполнить примером
        </Button>
      </div>
      <div className='mt-3 w-full flex gap-5'>
        <TextArea
          className='w-1/2 h-96'
          value={text1}
          withHighlightingChanges
          valueChanges={text1Changes}
          maxLength={MAX_TEXT_LENGTH}
          placeholder='Введите или вставьте текст'
          onChange={handleChangeText1}
        />
        <TextArea
          className='w-1/2 h-96'
          value={text2}
          withHighlightingChanges
          valueChanges={text2Changes}
          maxLength={MAX_TEXT_LENGTH}
          placeholder='Введите или вставьте текст'
          onChange={handleChangeText2}
        />
      </div>
    </>
  )
}

export default Differ
