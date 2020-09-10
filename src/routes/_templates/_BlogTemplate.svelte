<script>
  import Layer from '../../components/atoms/objects/Layer.svelte';
  import Retain from '../../components/atoms/objects/Retain.svelte';
  import Heading from '../../components/atoms/text/Heading.svelte';
  import Text from '../../components/atoms/text/Text.svelte';
  import DateString from '../../components/atoms/text/DateString.svelte';

  export let content;
  export let title;
  export let subtitle;
  export let author;
  export let date;
</script>

<style type="text/scss" lang="scss">
  @use 'sass/vars';

  article {
    :global(figure) {
      margin-bottom: vars.$space-base;
    }

    :global(figcaption) {
      font-weight: vars.$font-weight-bold;
      font-size: vars.$milli;
      font-style: italic;
    }

    :global(.c-codeblock) {
      background-color: vars.$color-white;
      padding: vars.$space-base;
      margin-left: -1 * vars.$space-base;
      margin-right: vars.$space-base;
      color: vars.$color-black;
      overflow: auto;
    }
  }

  .blog-heading {
    text-align: center;
  }
</style>

<article>
  <Layer>
    <header>
      <Retain>
        <div class="blog-heading">
          <Heading
            level={1}
            text={title}
          />
        </div>

      </Retain>
      <Retain size="narrow">
        <Text
          text={subtitle}
          modifier="intro"
        />
        <Text
          modifier="byline"
        >
          Added by <a href="https://twitter.com/{author.twitterHandle}">{author.firstName} {author.lastName}</a>,
          <DateString date={date} />
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
