<script>
  import Layer from '../../components/atoms/objects/Layer.svelte';
  import Retain from '../../components/atoms/objects/Retain.svelte';
  import Heading from '../../components/atoms/text/Heading.svelte';
  import Text from '../../components/atoms/text/Text.svelte';
  import DateString from '../../components/atoms/text/DateString.svelte';
  import Flow from '../../components/atoms/objects/Flow.svelte';

  export let content;
  export let title;
  export let subtitle;
  export let author;
  export let date;
  export let lang;
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  article {
    :global(figcaption) {
      font-weight: var(--font-weight-bold);
      @include typography.font-size(14px);
      font-style: italic;
    }

    :global(.c-codeblock) {
      background-color: var(--color-white);
      padding: var(--space-base);
      margin-inline: calc(var(--space-base) * -1);
      color: var(--color-black);
      overflow: auto;
    }
  }

  .blog-heading {
    text-align: center;
  }
</style>

<article lang="{lang}">
  <Layer>
    <header>
      <Flow space="tiny">
        <Retain size="wall">
          <div class="blog-heading">
            <Heading level={1} text={title} />
          </div>
        </Retain>
        <Retain size="lap">
          <Flow space="tiny">
            <Text modifier="intro">{subtitle}</Text>
            <Text modifier="byline">
              Added by <a href="https://mastodon.nl/{author.twitterHandle}">{author.firstName} {author.lastName}</a>, <DateString date={date} />
            </Text>
          </Flow>
        </Retain>
      </Flow>
    </header>
  </Layer>
  <Layer collapseTop>
    <Retain size="lap">
      <Text>{@html content}</Text>
    </Retain>
  </Layer>
</article>
