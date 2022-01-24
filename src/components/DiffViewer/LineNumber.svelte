<script lang="ts">
  import cn from 'classnames'

  export let className = ''
  export let number: number
</script>

<div class={cn(className, 'text-gray-500')}>
  {number}
</div>
