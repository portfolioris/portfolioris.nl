<script context="module">
  export async function preload({ path, query, params }) {
    const res = await this.fetch(`[slug].json`);
    return await res.json();
  }
</script>

<script>
    import ModularPageTemplate from '../components/ModularPageTemplate.svelte';
    import 'swiper/css/swiper.css';
    import { Swiper } from 'swiper/js/swiper.esm.js';
    import { onMount } from 'svelte';

    onMount(() => {
        var mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
        });
    });

    export let data;
    export let parsedContent;
</script>

<ModularPageTemplate modules={data.modules}></ModularPageTemplate>

{@html parsedContent}

<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
    </div>
</div>
