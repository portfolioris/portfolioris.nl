<script>
  import Layer from "../atoms/objects/Layer.svelte";
  import Retain from "../atoms/objects/Retain.svelte";
  import DateString from "../atoms/text/DateString.svelte";

  export let items;
  export let collapseTop;
  export let collapseBottom;
</script>

<section>
  <Layer {collapseBottom} {collapseTop}>
    <Retain size="lap">
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
                <a href="https://www.imdb.com/{item.href}">{item.title}</a>
                ({item.year})
              </td>
              <td>
                <span class="date-short">
                  <DateString date={item.watchDate} as="short" />
                </span>
                <span class="date-long">
                  <DateString date={item.watchDate} />
                </span>
              </td>
              <td>
                {item.rating} <small>/ 10</small>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </Retain>
  </Layer>
</section>

<style lang="scss">
  @use "@supple-kit/supple-css/tools/responsive";

  th,
  td {
    text-align: start;
    vertical-align: top;

    &:not(:first-of-type) {
      padding-inline-start: var(--space-tiny);
    }

    &:not(:last-of-type) {
      padding-inline-end: var(--space-tiny);
    }
  }

  .date-long {
    display: none;
    white-space: nowrap;
  }

  @include responsive.mq(lap) {
    .date-short {
      display: none;
    }

    .date-long {
      display: block;
    }
  }
</style>
