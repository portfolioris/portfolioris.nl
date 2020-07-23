<script>
  export let cloudinaryUrl;
  export let alt;
  export let lazyload = true;

  let size = 300;
  const paths = [];

  while (size <= 1500) {
    paths.push(`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${cloudinaryUrl} ${size}w`);
    size = size + 100;
  }

  const srcset = paths.join(',');
</script>

<img
  src={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_60/${cloudinaryUrl}`}
  srcset={`${srcset}`}
  alt={alt}
  loading={lazyload ? 'lazy' : null}
/>
