<script>

  export let date;
  export let as;

  let options = { year: 'numeric', month: 'long', day: 'numeric' };

  if (as === 'year') {
    options = { year: 'numeric' };
  }

  const dateObj = new Date(date);
  const dateFormat = new Intl.DateTimeFormat('en', options);
  const dateString = dateFormat.format(dateObj);
</script>

<time datetime={date}>{dateString}</time>

