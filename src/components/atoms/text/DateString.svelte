<script>
  export let date;
  export let as;
  const dateObj = new Date(date);
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  if (as === 'year') {
    options = { year: 'numeric' };
  }
  const format = new Intl.DateTimeFormat('en', options);
  const dateString = format.format(dateObj);
</script>

<time datetime={date}>{dateString}</time>
