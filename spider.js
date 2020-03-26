const request = require('request');
const cheerio = require('cheerio');

request('https://www.imdb.com/chart/moviemeter', function(err, res, body) {
  if (err) console.log(`Error: ${err}`);

  let $ = cheerio.load(body);

  $('.lister-list tr').each(function() {
    let title =  $(this).find('.titleColumn a').text().trim();
    let rating = $(this).find('.imdbRating strong').text().trim();
    
    console.log(`Title: ${title}, Rating: ${rating}`)
  });
});
