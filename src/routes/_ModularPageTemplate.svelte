<script>
  import RichTextBlock from '../components/organisms/RichTextBlock.svelte';
  import ArticleOverview from '../components/organisms/ArticleOverview.svelte';

  export let modules = [];
</script>

{#each modules as module}
  {#if module.__typename  === 'ModulesRichTextBlock'}
    <RichTextBlock {...module} />
  {/if}
  {#if module.__typename  === 'ModulesBlogOverview'}
    <ArticleOverview {...module} />
  {/if}
{/each}
