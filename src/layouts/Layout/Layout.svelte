<script lang="ts">
  import cn from 'classnames'
  import '../../app.css'
</script>

<div
  class={cn(
    'p-4 md:p-10 min-h-screen',
    'bg-gradient-to-br from-blue-50 to-white'
  )}
>
  <div class="mx-auto max-w-screen-xl w-full h-full"><slot /></div>
</div>
