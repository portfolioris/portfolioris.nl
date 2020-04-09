<script>
  export let date;
  // const dateObj = new Date(date * 1000);
  const dateObj = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const format = new Intl.DateTimeFormat('en', options);
  const dateString = format.format(dateObj);
</script>

{dateString}
