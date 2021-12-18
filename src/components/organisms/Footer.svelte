<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
</script>

<style lang="scss">
  @use 'src/sass/generic/utilities';

  footer {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  a {
    #{utilities.$global-interaction-states} {
      color: var(--black);
    }
  }
</style>

<footer>
  <Layer size="medium">
    <Retain size="wall">
      <Layout fit gap="base">
        <p>© Portfolioris 2021</p>
        <p><a href="https://twitter.com/Portfolioris" rel="me">Find me on Twitter</a></p>
        <p><a href="https://github.com/portfolioris" rel="me">Find me on GitHub</a></p>
      </Layout>
    </Retain>
  </Layer>
</footer>
