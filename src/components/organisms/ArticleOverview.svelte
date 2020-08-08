<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Heading from '../atoms/text/Heading.svelte';
  import ArticleOverviewItem from '../molecules/ArticleOverviewItem.svelte';
  import Button from '../atoms/Button.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let heading;
  export let hideHeadingVisually = false;
  export let viewAllBlogs = null;
  export let viewAllBlogsLabel = null;
  export let latest;

  export let items = [];

  if (latest) {
    items = items.slice(0, 3);
  }

  console.log(items);
</script>
<section>
  <Layer>
    <Retain>
      <div class:u-visually-hidden={hideHeadingVisually}>
        <Heading
          text={heading}
          level={2}
        />
      </div>
    </Retain>
    <Retain size="breakout">
      <Layout gutter="base" hasEqualheight>
          {#each items as item}
            <Cell lap={[1, 2]} desk={[1, 3]}>
              <ArticleOverviewItem
                title={item.title}
                subheading={item.subtitle}
                uri="{item.uri}"
                postDate={item.date}
              />
            </Cell>
          {/each}
      </Layout>

        {#if viewAllBlogsLabel}
          <Layout>
            <Cell fit align="center">
              <p>
                <Button
                  href="{viewAllBlogs}"
                  label={viewAllBlogsLabel}
                />
              </p>
            </Cell>
          </Layout>
        {/if}
    </Retain>
  </Layer>
</section>
