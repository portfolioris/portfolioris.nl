<script>
    import marked from 'marked';
    export let text;
    const ctext = marked(text);
</script>

<div class="u-module  u-m-b">
    {@html ctext}
</div>

