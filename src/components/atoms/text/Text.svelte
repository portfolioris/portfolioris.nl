<script>
  import marked from 'marked';

  export let text;
  export let type;

  if (type === 'md') {
    text = marked(text);
  }
</script>

<div class="u-module  u-m-b">
    {@html marked(text)}
</div>

