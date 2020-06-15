<script>
  export let header;
  export let site;
  export let uri;

  $: title = header.title;
  $: description = header.metadata.description;
  $: siteName = site.site.title;
  $: twitterHandle = site.site.metadata.twitterHandle;
  $: domain = site.site.metadata.domain;

  $: schema = [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: title,
      item: `${domain}/${uri !== '/' ? uri : ''}`,
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
