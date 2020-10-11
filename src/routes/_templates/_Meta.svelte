<script>
  export let author = null;
  export let site;
  export let path = [];
  export let title;
  export let description;

  const {
    siteName,
    twitterHandle,
    domain,
    lang,
  } = site;

  $: itemListElements = path.map((segment, index) => {
    return {
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${domain}${segment.uri !== 'home' ? segment.uri : ''}`,
        name: segment.title,
      }
    }
  });

  $: schema = [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElements,
  }, {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: domain,
    name: siteName,
  }];
</script>

<svelte:head>
  <title>{title} • {siteName}</title>
  {#if author}
    <meta name="author" content={`${author.firstName} ${author.lastName}`}>
    {/if}
  <meta name="description" content={description}>
  <meta name="twitter:site" content={twitterHandle}>
</svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
