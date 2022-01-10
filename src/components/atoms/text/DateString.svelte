<script>
  export let date;
  export let as = null;

  let options = { year: 'numeric', month: 'long', day: 'numeric' };

  if (as === 'year') {
    options = { year: 'numeric' };
  }

  if (as === 'short') {
    options = { month: 'short', day: 'numeric' };
  }

  const dateObj = new Date(date);
  const dateFormat = new Intl.DateTimeFormat('en', options);
  const dateString = dateFormat.format(dateObj);
</script>

<time datetime={date}>{dateString}</time>

