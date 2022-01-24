<script lang="ts">
  import cn from 'classnames'
  import '../../app.css'
</script>

<div class={cn('mx-auto p-4 md:px-10 md:py-6 max-w-screen-xl min-h-screen')}>
  <header>
    <div class="text-3xl font-bold">Just compare.</div>
  </header>
  <main class="mt-5 mx-auto w-full h-full"><slot /></main>
</div>

<style>
  :global(body) {
    @apply bg-gradient-to-br from-blue-50 to-white;
  }
</style>
