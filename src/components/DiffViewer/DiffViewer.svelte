<script lang="ts">
  import cn from 'classnames'
  import type { Diff } from 'modules/diff'
  import LineNumber from './LineNumber.svelte'
  import Line from './Line.svelte'

  export let className = ''
  export let diff: Diff
</script>

<div
  class={cn(
    className,
    'table w-full py-2',
    'rounded bg-white border-2 border-gray-200'
  )}
>
  {#each diff.left as _, i (i)}
    <div class="table-row">
      <LineNumber className="table-cell px-2" number={i + 1} />
      <Line className="table-cell w-1/2 mx-2" line={diff.left[i]} />
      <LineNumber className="table-cell px-2" number={i + 1} />
      <Line className="table-cell w-1/2" line={diff.right[i]} />
    </div>
  {/each}
</div>
