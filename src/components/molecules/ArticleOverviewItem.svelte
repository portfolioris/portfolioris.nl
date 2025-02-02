<script>
  import Heading from "../atoms/text/Heading.svelte";
  import DateString from "../atoms/text/DateString.svelte";
  import Flow from "../atoms/objects/Flow.svelte";

  export let title;
  export let uri;
  export let subheading;
  export let postDate;
</script>

<article>
  <Flow space="tiny">
    <Heading text={title} level={3} href={uri} />
    {#if subheading}
      <p class="subheading">
        {subheading}
      </p>
    {/if}
    <p>
      <DateString date={postDate} />
    </p>
  </Flow>
</article>

<style lang="scss">
  @use "/src/sass/generic/utilities";
  @use "@supple-kit/supple-css/tools/typography";

  article {
    height: 100%;
    background-color: var(--color-white);
    color: var(--color-black);
    padding: var(--space-base);
    position: relative;
    transition: var(--base-transition-duration);
    transition-property: background-color, border-color;

    @media (prefers-color-scheme: light) {
      border: 1px solid transparent;
      background-color: var(--color-gray-light);

      #{utilities.$global-interaction-states},
      &:focus-within {
        border-color: var(--color-black);
        background-color: var(--color-white);
      }
    }

    :global(a::after) {
      // b/c there is no <a> here ....
      content: "";
      position: absolute;
      z-index: 2;
      inset: 0;
    }
  }

  .subheading {
    font-weight: var(--font-weight-bold);
  }

  p {
    @include typography.font-size(14px);
  }
</style>
