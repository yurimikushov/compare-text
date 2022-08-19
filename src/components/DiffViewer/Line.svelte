<script lang="ts">
  import cn from 'classnames'
  import type { Line } from 'modules/diff'
  import { isAddedWhiteSpace, isRemovedWhiteSpace } from './utils'

  export let className = ''
  export let line: Line
</script>

<div
  class={cn(className, 'px-0.5 break-all', {
    'bg-red-200': line.removed,
    'bg-green-200': line.added,
    'bg-gray-100': line.dummy
  })}
>
  {#each line.childs as token, i (i)}
    <!--
      Span opening tag and span closing tag must be on the same line of code,
      otherwise the next white space be highlighted with color of current token ¯\_(ツ)_/¯
     -->
    <span
      class={cn({
        'bg-red-400': token.removed || isRemovedWhiteSpace(i, line.childs),
        'bg-green-400': token.added || isAddedWhiteSpace(i, line.childs)
      })}>{token.value}</span
    >
  {/each}
</div>
