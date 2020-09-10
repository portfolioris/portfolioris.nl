<script>
  import Heading from '../atoms/text/Heading.svelte';
  import DateString from '../atoms/text/DateString.svelte';

  export let title;
  export let uri;
  export let subheading;
  export let postDate;
</script>

<style type="text/scss" lang="scss">
  @use 'sass/vars';

  article {
    background-color: vars.$color-white;
    color: vars.$color-black;
    padding: vars.$space-base;
    position: relative;

    :global(a::after) { // b/c there is no <a> here ....
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    * {
      margin-bottom: vars.$space-tiny;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }

  .subheading {
    font-weight: vars.$font-weight-bold;
  }

  p {
    font-size: vars.$micro;
  }
</style>

<article>
  <Heading
    text={title}
    level={3}
    href={uri}
  />
  {#if subheading}
    <p class="subheading">
      {subheading}
    </p>
  {/if}
  <p>
    <DateString date={postDate} />
  </p>
</article>
