<script>
  import Theme from '../atoms/utilities/Theme.svelte';
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Text from '../atoms/text/Text.svelte';
  import DateString from '../atoms/text/DateString.svelte';

  export let collapseTop = false;
  export let collapseBottom = false;
  export let richText;
  export let items;
</script>
<section>
  <Theme color="black">
    <Layer
      collapseTop={collapseTop}
      collapseBottom={collapseBottom}
    >
      <Retain size="narrow">
        <Text text={richText} />

        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Watched on</th>
              <th scope="col">My rating</th>
            </tr>
          </thead>
          <tbody>
              {#each items as item}
                <tr>
                  <td>
                    {item.filmTitle} ({item.filmYear})
                  </td>
                  <td>
                    <DateString date={item.watchedDate} />
                  </td>
                  <td>
                    {item.rating * 2} <small>/ 10</small>
                  </td>
                </tr>
              {/each}
          </tbody>
        </table>
      </Retain>
    </Layer>
  </Theme>
</section>
