<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Text from '../atoms/text/Text.svelte';

  export let collapseTop = false;
  export let collapseBottom = false;
  export let richText;
</script>

<section>
  <Layer
    collapseTop={collapseTop}
    collapseBottom={collapseBottom}
  >
    <Retain size="narrow">
      <Text markdown={richText} />
    </Retain>
  </Layer>
</section>
