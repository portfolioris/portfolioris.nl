<script>
  import ArticleOverview from "../components/organisms/ArticleOverview.svelte";
  import LatestMovies from "../components/organisms/LatestMovies.svelte";
  import LatestBooks from "../components/organisms/LatestBooks.svelte";
  import RichTextBlock from "../components/organisms/RichTextBlock.svelte";

  export let blogs = [];
  export let movies = [];
  export let books = [];
  export let modules = [];
</script>

{#each modules as module}
  {#if module.type === "richText"}
    <RichTextBlock {...module} />
  {/if}
  {#if module.type === "blogOverview"}
    <ArticleOverview {...module} items={blogs} />
  {/if}
  {#if module.type === "movies"}
    <!--    <LatestMovies {...module} items={movies} />-->
  {/if}
  {#if module.type === "books"}
    <LatestBooks {...module} items={books} />
  {/if}
{/each}
