<script>
  import RichTextBlock from '../components/organisms/RichTextBlock.svelte';
  import ArticleOverview from '../components/organisms/ArticleOverview.svelte';

  export let blogs = [];
  export let modules = [];
  export let title;
  export let description;
  export let globals;

  const {
    settings: {
      siteName,
      twitterHandle,
    }
  } = globals;
</script>

<svelte:head>
  <title>{title} • {siteName}</title>
  <meta name="description" content={description}>
  <meta name="twitter:site" content={twitterHandle}>
</svelte:head>

{#each modules as module}
  {#if module.__typename  === 'ModulesRichTextBlock'}
    <RichTextBlock {...module} />
  {/if}
  {#if module.__typename  === 'ModulesBlogOverview'}
    <ArticleOverview {...module} items={blogs} />
  {/if}
{/each}
