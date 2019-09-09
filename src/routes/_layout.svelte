<script>
  import Navigation from '../components/organisms/Navigation.svelte';

  export let items = [
    {
    	text: 'foo',
		href: '#foo'
	},
    {
    	text: 'bar',
		href: '#bar'
	},
  ];
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>

<Navigation {items}>
  <slot></slot>
</Navigation>
