<script>
  export let element = 'label';
  let forHtml;
  export { forHtml as for };
  export let hint;
  export let text;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  label,
  legend,
  .c-label {
    display: block;
    margin-bottom: $supple-space-tiny;
  }



  /*  Elements
      ========================================================================= */

  .c-label__label,
  .c-label__hint {
    display: block;
  }

  .c-label__label {
    font-weight: $font-weight-bold;
  }
</style>

{#if element === 'fieldset'}
  <fieldset>
      {text}
  </fieldset>
{:else}
  <label for={forHtml} class="c-label">
    <span class="c-label__label">
      {text}
    </span>
      {#if hint}
        <span class="c-label__hint">
          {hint}
        </span>
      {/if}
  </label>
{/if}
