<script>
  export let url = '';
  export let alt = '';
  export let lazyload = true;

  const avifs = [];
  const webps = [];

  for (let size = 300; size <= 1500; size += 300) {
    avifs.push(`/img/q_auto,f_avif,c_scale,w_${size}/${url} ${size}w`);
    webps.push(`/img/q_auto,f_webp,c_scale,w_${size}/${url} ${size}w`);
  }
</script>

<style>
  img {
      inline-size: 100%;
  }
</style>

<picture>
  <source
    srcset="{lazyload ? `${avifs.join(',')}` : null}"
    type="image/avif"
  >
  <source
    srcset="{lazyload ? `${webps.join(',')}` : null}"
    type="image/webp"
  >
  <img
    loading="lazy"
    {alt}
  >
</picture>
