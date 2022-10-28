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
        <p>© Portfolioris 2022</p>
        <p>Me in other places:</p>
        <Layout element="ul" fit gap="small">
          <li>
            <a href="https://twitter.com/Portfolioris" rel="me">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/portfolioris" rel="me">GitHub</a>
          </li>
          <li>
            <a href="https://mastodon.nl/@Portfolioris">Mastodon</a>
          </li>
          <li>
            <a href="/rss.xml" rel="alternate">RSS</a>
          </li>
        </Layout>
      </Layout>
    </Retain>
  </Layer>
</footer>
