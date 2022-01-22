<script lang="ts">
  import cn from 'classnames'
  import '../app.css'

  export let className: string
</script>

<div
  class={cn(
    className,
    'p-4 md:p-10 min-h-screen',
    'bg-gradient-to-br from-blue-50 to-white'
  )}
>
  <div class="mx-auto max-w-screen-xl w-full h-full"><slot /></div>
</div>
