<script>
  export let site;
  export let uri;
  export let title;
  export let description;

  const {
    siteName,
    twitterHandle,
    domain,
    lang,
  } = site;

  $: schema = [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: title,
      item: `${domain}${uri !== '/' ? uri : ''}`,
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
</svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
