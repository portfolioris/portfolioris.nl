<script>
  export let cloudinaryUrl;
  export let alt;
  export let lazyload = true;
</script>

<picture>
  <source
    data-srcset={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${cloudinaryUrl}`}
    srcset={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${cloudinaryUrl}` : null}
  />
  <img
    data-sizes="auto"
    class="lazyload"
    data-src={lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_60/${cloudinaryUrl}` : null}
    src={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${cloudinaryUrl}` : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
    alt={alt}
  />
</picture>
