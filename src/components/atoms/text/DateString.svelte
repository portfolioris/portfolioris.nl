<script>
  // import { parse } from 'date-fns';

  export let date;
  export let as;
  // export let format = 'yyyy-MM-dd HH:mm'; // Grav default date format

  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  if (as === 'year') {
    options = { year: 'numeric' };
  }

  // let dateObj;
  //
  // if (format) {
  //   dateObj = parse(date, format, new Date())
  // } else {
  //   dateObj = new Date(date);
  // }

  const dateObj = new Date(date);
  const dateFormat = new Intl.DateTimeFormat('en', options);
  const dateString = dateFormat.format(dateObj);
</script>

<time datetime={date}>{dateString}</time>

