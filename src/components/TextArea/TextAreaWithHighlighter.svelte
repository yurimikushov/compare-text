<script lang="ts">
  import { afterUpdate } from 'svelte'
  import cn from 'classnames'
  import type { Token } from 'lib/diff/types'
  import BaseTextArea from './BaseTextArea.svelte'
  import Highlighter from './Highlighter.svelte'

  export let className = ''
  export let value: string
  export let valueChanges: Array<Token>

  let textArea: HTMLTextAreaElement
  let highlighter: HTMLDivElement

  afterUpdate(() => {
    highlighter.scrollTop = textArea.scrollTop
  })

  const handleScroll = () => {
    highlighter.scrollTop = textArea.scrollTop
  }
</script>

<div class={cn(className, 'relative bg-white rounded-md')}>
  <BaseTextArea
    bind:ref={textArea}
    className={cn('absolute top-0 left-0 z-[2]', 'bg-transparent')}
    bind:value
    on:scroll={handleScroll}
  />
  <Highlighter
    bind:ref={highlighter}
    className={cn(
      'absolute top-0 left-0 z-[1]',
      'm-px ml-px p-3',
      'text-transparent pointer-events-none'
    )}
    tokens={valueChanges}
  />
</div>
