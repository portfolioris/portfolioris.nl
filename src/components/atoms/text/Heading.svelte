<script>
    export let level = 1;
    export let stylingLevel;
    export let text;
    let stylingLevelClass;

    if (stylingLevel) {
      stylingLevelClass = `h${stylingLevel}`;
    }
</script>

{#if level === 1}
    <h1 class={stylingLevelClass}>{text}</h1>
{/if}

{#if level === 2}
    <h2 class={stylingLevelClass}>{text}</h2>
{/if}

{#if level === 3}
    <h3 class={stylingLevelClass}>{text}</h3>
{/if}

{#if level === 4}
    <h4 class={stylingLevelClass}>{text}</h4>
{/if}

{#if level === 5}
    <h5 class={stylingLevelClass}>{text}</h5>
{/if}
