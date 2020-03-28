<script>
  export let image;
  export let lazyload = true;
</script>

<picture>
  <source
    data-srcset={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${image.folder.path}${image.filename}`}
    srcset={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${image.folder.path}${image.filename}` : null}
  />
  <img
    data-sizes="auto"
    class="lazyload"
    data-src={lazyload ? image.src : null}
    src={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${image.folder.path}${image.filename}` : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
    alt={image.title}
  />
</picture>
