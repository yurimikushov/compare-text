<script lang="ts">
  import cn from 'classnames'
  import type { Line } from 'modules/diff'

  export let className = ''
  export let line: Line
</script>

<div
  class={cn(className, {
    'bg-red-200': line.removed,
    'bg-green-200': line.added,
    'bg-gray-100': line.dummy
  })}
>
  {#each line.childs as token, i (i)}
    <span
      class={cn({
        'bg-red-400': token.removed,
        'bg-green-400': token.added
      })}
    >
      {token.value}
    </span>
  {/each}
</div>
