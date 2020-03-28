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

  export let data;

  const {
    entry: {
      title,
      subheading,
      author: {
        firstName,
        lastName,
      },
      postDate,
      richText,
    },
  } = data;
</script>

<style type="text/scss" lang="scss">
  @import "engine";

  header {
    margin-bottom: $supple-space-base;

    > :global(*) {
      margin-bottom: 0;

      > :global(*:last-child) {
        margin-bottom: 0;
      }
    }
  }
</style>

<article>
  <Layer>
    <Retain size="narrow">
      <header>
        <Heading
          level={1}
          stylingLevel={0}
          text={title}
        />
        <Text
          text={subheading}
          modifier="intro"
        />
        <Text
          modifier="byline"
        >
          Added by {firstName} {lastName},
          <DateString date={postDate} />
        </Text>
      </header>
    </Retain>
  </Layer>
  <Layer collapseTop>
    <Retain size="narrow">
        {@html richText}
    </Retain>
  </Layer>
</article>
