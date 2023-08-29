<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Heading from '../atoms/text/Heading.svelte';
  import ArticleOverviewItem from '../molecules/ArticleOverviewItem.svelte';
  import Button from '../atoms/Button.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Flow from '../atoms/objects/Flow.svelte';
  import Mesh from '../atoms/objects/Mesh.svelte';

  export let heading;
  export let hideHeadingVisually = false;
  export let viewAllBlogs = null;
  export let viewAllBlogsLabel = null;
  export let latest;

  export let items = [];

  if (latest) {
    items = items.slice(0, latest);
  }
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden';
</style>

<section>
  <Layer>
    <Flow>
      <Retain size="wall">
        <div class:u-visually-hidden={hideHeadingVisually}>
          <Heading
            text={heading}
            level={2}
          />
        </div>
      </Retain>

      <Retain size="wall" isBreakout>
        <Mesh element="ul" gap="base" size="medium">
          {#each items as item}
            <li>
              <ArticleOverviewItem
                title={item.title}
                subheading={item.subtitle}
                uri="{item.uri}"
                postDate={item.date}
              />
            </li>
          {/each}
        </Mesh>
      </Retain>

      {#if viewAllBlogsLabel}
        <Retain size="wall">
          <Layout alignInline="center" fit>
            <p>
              <Button
                href="{viewAllBlogs}"
                label={viewAllBlogsLabel}
              />
            </p>
          </Layout>
        </Retain>
      {/if}
    </Flow>

  </Layer>
</section>
