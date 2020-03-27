<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Text from '../atoms/text/Text.svelte';
</script>

<style type="text/scss" lang="scss">
  @import "engine";

  footer {
    background-color: $white;
    color: $black;
  }
</style>

<footer>
  <Layer size="medium">
    <Retain>
      <div class="u-milli">
        <div class="o-layout  o-layout--gutter-small">
          <div class="o-layout__cell  o-layout__cell--fit  u-module">
            <p>© Portfolioris 2019</p>
          </div>
            <!--
            <div class="o-layout__cell  o-layout__cell--fit">
              <ul class="o-layout  o-layout--gutter-small  u-mb-flatten">
                {items.map(item => (
                <li
                  // key={item.ID}
                  class="o-layout__cell  o-layout__cell--fit"
                >
                  <a href="#_">Link?</a>
                </li>
                ))}
              </ul>
            </div>
            -->
        </div>
      </div>
    </Retain>
  </Layer>
</footer>
