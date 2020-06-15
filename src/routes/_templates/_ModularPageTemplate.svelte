<script>
  import ArticleOverview from '../../components/organisms/ArticleOverview.svelte';
  import LatestMovies from '../../components/organisms/LatestMovies.svelte';
  import LatestBooks from '../../components/organisms/LatestBooks.svelte';
  import RichTextBlock from '../../components/organisms/RichTextBlock.svelte';

  export let blogs = [];
  export let movies = [];
  export let books = [];
  export let children = [];
</script>

{#each children as module}
  {#if module.moduleTemplate  === 'modular/richtextblock'}
    <RichTextBlock {...module.header} />
  {/if}
  {#if module.moduleTemplate  === 'modular/blogoverview'}
    <ArticleOverview {...module.header} items={blogs} />
  {/if}
  {#if module.moduleTemplate  === 'modular/movies'}
    <LatestMovies {...module.header} items={movies} />
  {/if}
  {#if module.moduleTemplate  === 'modular/books'}
    <LatestBooks {...module.header} items={books} />
  {/if}
{/each}
