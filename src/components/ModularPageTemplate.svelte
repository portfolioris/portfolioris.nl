<script>
  import RichTextBlock from './organisms/RichTextBlock.svelte';
  export let modules;
</script>

{#each modules as module}
  {#if module.type  === 'richTextBlock'}
    <RichTextBlock richText={module.richText} />
  {/if}
{/each}
