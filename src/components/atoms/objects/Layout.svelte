<script>
  export let element = "div";
  export let alignInline = "";
  export let alignBlock = "";
  export let gap = "";
  export let gapInline = "";
  export let gapBlock = "";
  export let fit = false;
  export let fill = false;
  export let hasEqualheight = false;
  export let noWrap = false;
  export let reverse = false;
</script>

<svelte:element
  this={element}
  class="o-layout"
  class:o-layout--reverse={reverse}
  class:o-layout--fit={fit}
  class:o-layout--fill={fill}
  class:o-layout--align-inline-between={alignInline === "between"}
  class:o-layout--align-inline-center={alignInline === "center"}
  class:o-layout--align-inline-end={alignInline === "end"}
  class:o-layout--align-block-center={alignBlock === "center"}
  class:o-layout--align-block-end={alignBlock === "end"}
  class:o-layout--gap-small={gap === "small"}
  class:o-layout--gap-base={gap === "base"}
  class:o-layout--gap-huge={gap === "huge"}
  class:o-layout--gap-inline-small={gapInline === "small"}
  class:o-layout--gap-inline-base={gapInline === "base"}
  class:o-layout--gap-inline-huge={gapInline === "huge"}
  class:o-layout--gap-block-small={gapBlock === "small"}
  class:o-layout--gap-block-base={gapBlock === "base"}
  class:o-layout--gap-block-huge={gapBlock === "huge"}
  class:o-layout--stretch={hasEqualheight}
  class:o-layout--nowrap={noWrap}
>
  <slot />
</svelte:element>

<style lang="scss">
  @use "/src/sass/vars";
  @use "@supple-kit/supple-css/objects/layout" with (
    $gaps: (
      "small",
      "base",
      "huge",
    )
  );

  .o-layout--nowrap {
    flex-wrap: nowrap;
  }
</style>
