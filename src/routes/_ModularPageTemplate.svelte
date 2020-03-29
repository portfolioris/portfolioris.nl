<script>
  import RichTextBlock from '../components/organisms/RichTextBlock.svelte';
  import ArticleOverview from '../components/organisms/ArticleOverview.svelte';

  export let blogs = [];
  export let modules = [];
  export let title;

  let settings;

  import { globalsStore } from './stores.js';
  globalsStore.subscribe(val => {
    settings = (val.settings);
  });
</script>

<svelte:head>
  <title>{title} • {settings.siteName}</title>
</svelte:head>

{#each modules as module}
  {#if module.__typename  === 'ModulesRichTextBlock'}
    <RichTextBlock {...module} />
  {/if}
  {#if module.__typename  === 'ModulesBlogOverview'}
    <ArticleOverview {...module} items={blogs} />
  {/if}
{/each}
