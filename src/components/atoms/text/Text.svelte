<script>
    import marked from 'marked';
    export let text;
    let parsedText = marked(text);
</script>

<div class="u-module  u-m-b">
    {@html parsedText}
</div>

