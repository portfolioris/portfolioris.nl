<script>
  import ArticleOverview from '../../components/organisms/ArticleOverview.svelte';
  import LatestMovies from '../../components/organisms/LatestMovies.svelte';
  import LatestBooks from '../../components/organisms/LatestBooks.svelte';
  import RichTextBlock from '../../components/organisms/RichTextBlock.svelte';

  export let blogs = [];
  export let movies = [];
  export let books = [];
  // export let modules = [];
  export let children = [];
  // export let title;
  // export let description;
  // export let globals;
  export let uri;
  export let level;
  export let header;
  export let site;

  const {
    title,
    metadata: {
      description,
    },
  } = header;

  const twitterHandle = site.site.metadata.twitterHandle;
  const domain = site.site.metadata.domain;
  const siteName = site.site.title;
  const schema = [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [{
      '@type': 'ListItem',
      'position': level,
      'name': title,
      'item': `${domain}/${uri !== '/' ? uri : ''}`,
    }],
  }, {
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
