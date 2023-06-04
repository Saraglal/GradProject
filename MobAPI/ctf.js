const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://0ijq1i6sp1.execute-api.us-east-1.amazonaws.com/dev';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const flags = $('section[id^="11"] main[id*="22"] article[id*="33"] p.flag').map((_, element) => $(element).attr('value')).get();

    console.log(flags.join(''));
  })
  .catch(error => {
    console.log('Error fetching the HTML:', error);
  });
