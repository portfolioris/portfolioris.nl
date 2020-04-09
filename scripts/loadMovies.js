const Parser = require('rss-parser');

const parser = new Parser({
  customFields: {
    item: [
      ['letterboxd:filmTitle', 'filmTitle'],
      ['letterboxd:memberRating', 'rating'],
      ['letterboxd:watchedDate', 'watchedDate'],
    ],
  },
});

(async () => {
  await parser.parseURL('https://letterboxd.com/portfolioris/rss/', (err, feed) => {
    feed.items.sort((a, b) => {
      return new Date(b.watchedDate) - new Date(a.watchedDate);
    });

    feed.items.forEach((item) => {
      console.log(`${item.filmTitle}: ${item.watchedDate}`);
    });
  });
})();
