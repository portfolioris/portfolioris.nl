<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Layer from '../../components/atoms/objects/Layer.svelte';
  import Retain from '../../components/atoms/objects/Retain.svelte';
  import Heading from '../../components/atoms/text/Heading.svelte';
  import Text from '../../components/atoms/text/Text.svelte';
  import DateString from '../../components/atoms/text/DateString.svelte';

  import { onMount } from 'svelte';
  import BlogReplyForm from '../../components/molecules/forms/BlogReplyForm.svelte';

  onMount(() => {
    import ('lazysizes');
    import ('lazysizes/plugins/rias/ls.rias');
  });
  export let data;

  const {
    entry: {
      title,
      description,
      subheading,
      uri,
      author: {
        firstName,
        lastName,
      },
      postDate,
      richText,
    },
    globals: {
      settings: {
        siteName,
        twitterHandle,
        domain,
      },
    },
  } = data;

  const schema = [{ // todo: add breadcrumb levels for nested pages
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [{
      '@type': 'ListItem',
      'position': 1,
      'name': 'Blog',
      'item': `${domain}/blog`,
    }, {
      '@type': 'ListItem',
      'position': 2,
      'name': title,
      'item': `${domain}/${uri}`,
    }],
  }, {
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
      background-color: $color-white;
      padding: $supple-space-base;
      margin-left: -$supple-space-base;
      margin-right: -$supple-space-base;
      color: $color-black;
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
                text={subheading}
                modifier="intro"
        />
        <Text
                modifier="byline"
        >
          Added by {firstName} {lastName},
          <DateString date={postDate * 1000} />
        </Text>
      </Retain>
    </header>
  </Layer>
  <Layer collapseTop>
    <Retain size="narrow">
<!--        {@html richText}-->
    </Retain>
  </Layer>
</article>

<aside>
  <!--<Layer collapseTop>
    <Retain size="narrow">
      <Heading text="Comments" level={2} />
      <p><mark>comments</mark></p>
    </Retain>
  </Layer>-->
  <Layer collapseTop>
    <Retain size="narrow">
      <Heading text="Leave a reply" level={2} />
      <BlogReplyForm />
    </Retain>
  </Layer>
</aside>
