// import Parser from 'rss-parser';
const Parser = require('rss-parser');

const getMoviesFromApi = (async () => {
  const parser = new Parser({
    customFields: {
      item: [
        ['letterboxd:filmTitle', 'filmTitle'],
        ['letterboxd:memberRating', 'rating'],
        ['letterboxd:watchedDate', 'watchedDate'],
        ['letterboxd:filmYear', 'filmYear'],
      ],
    },
  });
  const feed = await parser.parseURL('https://letterboxd.com/portfolioris/rss/');
  feed.items.sort((a, b) => {
    return new Date(b.watchedDate) - new Date(a.watchedDate);
  });

  return feed.items;
});

export default getMoviesFromApi;
