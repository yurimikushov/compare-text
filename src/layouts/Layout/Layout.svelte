<script lang="ts">
  import cn from 'classnames'
  import routes from 'constants/routes'
  import '../../app.css'
</script>

<div class={cn('mx-auto p-4 md:px-10 md:py-6 max-w-screen-xl min-h-screen')}>
  <header class="flex justify-between items-center">
    <a class="text-3xl font-bold" href={routes.home}>Just compare.</a>
    <nav>
      <a class="text-gray-500 hover:text-gray-900" href={routes.about}>About</a>
    </nav>
  </header>
  <main class="mt-12 mx-auto w-full h-full"><slot /></main>
</div>

<style>
  :global(body) {
    @apply bg-gradient-to-br from-blue-50 to-white;
  }

  :global(a) {
    @apply outline-none;
  }

  :global(a:focus-visible) {
    @apply ring-2 ring-offset-1 ring-indigo-500;
  }
</style>
