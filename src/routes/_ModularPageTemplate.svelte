<script>
  import RichTextBlock from '../components/organisms/RichTextBlock.svelte';
  import ArticleOverview from '../components/organisms/ArticleOverview.svelte';

  export let blogs = [];
  export let modules = [];
  export let title;
  export let description;
  export let globals;
  export let uri;
  export let level;

  const {
    settings: {
      siteName,
      twitterHandle,
      domain,
    }
  } = globals;

  const schema = [{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": level,
      "name": title,
      "item": `${domain}/${uri !== '__home__' ? uri : ''}`
    }]
  },{
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: domain,
    name: siteName,
  }];
</script>

<svelte:head>
  <title>{title} • {siteName}</title>
  <meta name="description" content={description}>
  <meta name="twitter:site" content={twitterHandle}>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

{#each modules as module}
  {#if module.__typename  === 'ModulesRichTextBlock'}
    <RichTextBlock {...module} />
  {/if}
  {#if module.__typename  === 'ModulesBlogOverview'}
    <ArticleOverview {...module} items={blogs} />
  {/if}
{/each}
