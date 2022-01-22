<script lang="ts">
  import cn from 'classnames'
  import type { Token } from 'lib/diff/types'
  import BaseTextArea from './BaseTextArea.svelte'
  import Highlighter from './Highlighter.svelte'

  export let className: string
  export let value: string
  export let valueChanges: Array<Token>
</script>

<div class={cn(className, 'relative bg-white rounded-md')}>
  <BaseTextArea
    className={cn('absolute top-0 left-0 z-[2]', 'bg-transparent')}
    bind:value
  />
  <Highlighter
    className={cn(
      'absolute top-0 left-0 z-[1]',
      'm-px ml-px p-3',
      'text-transparent pointer-events-none'
    )}
    tokens={valueChanges}
  />
</div>
