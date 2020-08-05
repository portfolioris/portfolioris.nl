<script>
  // export let header;
  export let site;
  export let uri;

  export let title;
  export let description;

  // $: title = header.title;
  // $: description = header.metadata.description;
  $: siteName = site.siteName;
  $: twitterHandle = site.twitterHandle;
  $: domain = site.domain;

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
