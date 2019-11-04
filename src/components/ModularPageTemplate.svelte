<script>
  import RichTextBlock from './organisms/RichTextBlock.svelte';
  import ArticleOverview from './organisms/ArticleOverview.svelte';

  export let modules;
</script>

{#each modules as module}
  {#if module.type  === 'richTextBlock'}
    <RichTextBlock richText={module.richText} />
  {/if}
  {#if module.type  === 'blogOverview'}
    <ArticleOverview {...module} />
  {/if}
{/each}
