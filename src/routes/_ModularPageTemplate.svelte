<script>
  import RichTextBlock from '../components/organisms/RichTextBlock.svelte';
  import ArticleOverview from '../components/organisms/ArticleOverview.svelte';

  export let modules;
</script>

{#each modules as module}
  {#if module.type  === 'richTextBlock'}
    <RichTextBlock {...module} />
  {/if}
  {#if module.type  === 'blogOverview'}
    <ArticleOverview {...module} />
  {/if}
{/each}
