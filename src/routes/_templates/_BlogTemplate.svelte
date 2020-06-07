<script>
  import Layer from '../../components/atoms/objects/Layer.svelte';
  import Retain from '../../components/atoms/objects/Retain.svelte';
  import Heading from '../../components/atoms/text/Heading.svelte';
  import Text from '../../components/atoms/text/Text.svelte';
  import DateString from '../../components/atoms/text/DateString.svelte';

  import { onMount } from 'svelte';

  onMount(() => {
    import ('lazysizes');
    import ('lazysizes/plugins/rias/ls.rias');
  });

  export let uri;
  export let header;
  export let site;
  export let content = 'notset';
  export let lastName = 'notset';
  export let firstName = 'notset';

  const subtitle = header.subtitle;
  const postDate = header.date;

  const {
    title,
    metadata: {
      description,
    },
  } = header;

  const twitterHandle = site.site.metadata.twitterHandle;
  const domain = site.site.metadata.domain;
  const siteName = site.site.title;
  const schema = [{ // todo: add breadcrumb levels for nested pages
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Blog",
      "item": `${domain}/blog`
    },{
      "@type": "ListItem",
      "position": 2,
      "name": title,
      "item": `${domain}/${uri}`
    }]
  },{
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: domain,
    name: siteName,
  }];
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  article {
    :global(figure) {
      margin-bottom: $supple-space-base;
    }

    :global(figcaption) {
      font-weight: $font-weight-bold;
      font-size: $milli;
      font-style: italic;
    }

    :global(.c-codeblock) {
      background-color: $white;
      padding: $supple-space-base;
      margin-left: -$supple-space-base;
      margin-right: -$supple-space-base;
      color: $black;
      overflow: auto;
    }
  }
</style>

<svelte:head>
  <title>{title} • {siteName}</title>
  <meta name="description" content={description}>
  <meta name="twitter:site" content={twitterHandle}>

    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<article>
  <Layer>
    <header>
      <Retain>
        <Heading
          level={1}
          stylingLevel={0}
          text={title}
        />
      </Retain>
      <Retain size="narrow">
        <Text
          text={subtitle}
          modifier="intro"
        />
        <Text
          modifier="byline"
        >
          Added by {firstName} {lastName},
          <DateString date={postDate} />
        </Text>
      </Retain>
    </header>
  </Layer>
  <Layer collapseTop>
    <Retain size="narrow">
        {@html content}
    </Retain>
  </Layer>
</article>
