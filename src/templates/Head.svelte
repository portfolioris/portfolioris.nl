<script>
  export let author = null;
  export let site;
  export let path = [];
  export let title;
  export let description;

  const { siteName, twitterHandle, domain } = site;

  $: itemListElements = path?.map((segment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@id": `${domain}${segment.uri !== "home" ? segment.uri : ""}`,
      name: segment.title,
    },
  }));

  $: schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemListElements,
    },
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: domain,
      name: siteName,
    },
  ];
</script>

<svelte:head>
  <title>{title} • {siteName}</title>
  <meta name="description" content={description} />
  {#if author}
    <meta name="author" content={`${author.firstName} ${author.lastName}`} />
  {/if}

  {@html '<script type="application/ld+json">' +
    JSON.stringify(schema) +
    "</script>"}
  <script type="module" src="/assets/scripts/matomo.js"></script>
</svelte:head>
