<script>
    export let level = 5;
    export let stylingLevel;
    export let text;
    export let href;
    export let className;
    export { className as class };
    let stylingLevelClass;

    if (stylingLevel) {
      stylingLevelClass = `h${stylingLevel}`;
    }
</script>

<style type="text/scss" lang="scss">
    /*  Imports
        ========================================================================= */

    @import "engine";



    /*  Headings
        ========================================================================= */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: $font-family-secondary;
        line-height: 0.9;
        font-weight: bold;
        margin-bottom: $supple-space-small;

        a {
            color: $black;
            transition: color $base-transition-duration-short linear;

            &:hover,
            &:focus,
            &:active {
                color: $green;
            }
        }
    }


    .u-h0 {
        @include supple-font-size($alpha, false);
    }



    /*  Theming
        ========================================================================= */

    .t-bg--black {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            &,
            span,
            a {
                //color: $white;
            }
        }
    }
</style>

{#if level === 1}
    <h1 class={`${stylingLevelClass}  ${className}`}>
        {#if href}
            <a href={href}>{text}</a>
        {:else}
            {text}
        {/if}
    </h1>
{/if}

{#if level === 2}
    <h2 class={`${stylingLevelClass}  ${className}`}>
        {#if href}
            <a href={href}>{text}</a>
        {:else}
            {text}
        {/if}
    </h2>
{/if}

{#if level === 3}
    <h3 class={`${stylingLevelClass}  ${className}`}>
        {#if href}
            <a href={href}>{text}</a>
        {:else}
            {text}
        {/if}
    </h3>
{/if}

{#if level === 4}
    <h4 class={`${stylingLevelClass}  ${className}`}>
        {#if href}
            <a href={href}>{text}</a>
        {:else}
            {text}
        {/if}
    </h4>
{/if}

{#if level === 5}
    <h5 class={`${stylingLevelClass}  ${className}`}>
        {#if href}
            <a href={href}>{text}</a>
        {:else}
            {text}
        {/if}
    </h5>
{/if}
