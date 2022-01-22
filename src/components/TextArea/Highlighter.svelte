<script lang="ts">
  import cn from 'classnames'
  import type { Token } from 'lib/diff/types'
  import shouldConcatLeft from './utils/shouldConcatLeft'
  import shouldConcatRight from './utils/shouldConcatRight'

  export let className = ''
  export let tokens: Array<Token>
</script>

<div
  class={cn(
    className,
    'w-full max-w-full h-full max-h-[99%] overflow-hidden',
    'text-base'
  )}
>
  {#each tokens as { added, removed, value }, i (`${i}::${value}`)}
    <span
      class={cn('rounded-sm', {
        'bg-green-300': added,
        'bg-red-300': removed,
        'rounded-l-none': shouldConcatLeft(tokens, i),
        'rounded-r-none': shouldConcatRight(tokens, i)
      })}
    >
      {value}
      {#if value.endsWith('\n')}
        <br />
      {/if}
    </span>
  {/each}
</div>
