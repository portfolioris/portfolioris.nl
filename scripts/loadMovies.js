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

const getMovies = (async () => {
  const feed = await parser.parseURL('https://letterboxd.com/portfolioris/rss/');

  feed.items.sort((a, b) => {
    return new Date(b.watchedDate) - new Date(a.watchedDate);
  });

  return feed;
});

export default getMovies;
