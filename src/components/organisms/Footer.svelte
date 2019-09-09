<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Text from '../atoms/text/Text.svelte';
</script>

<footer>
  <Layer size="small">
    <Retain>
      <div class="u-milli">
        <div class="o-layout  o-layout--gutter-small">
          <div class="o-layout__cell  o-layout__cell--fit">
            <Text richText="© Portfolioris 2018" class="u-m-b-none" />
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
