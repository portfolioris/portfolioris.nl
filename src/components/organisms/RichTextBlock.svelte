<script>
  import Theme from '../atoms/utilities/Theme.svelte';
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Text from '../atoms/text/Text.svelte';

  export let collapseTop;
  export let collapseBottom;
  export let richText;
</script>

<section>
  <Theme color="black">
    <Layer
      collapseTop={collapseTop}
      collapseBottom={collapseBottom}
    >
      <Retain size="narrow">
        <Text text={richText} type="md" />
      </Retain>
    </Layer>
  </Theme>
</section>
