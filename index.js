const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const memeFolder = './memes';

if (fs.existsSync(memeFolder)) {
  console.log('meme folder exists');
} else {
  fs.mkdir('./memes', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('memes folder created.');
    }
  });
}

const mainUrl = `https://memegen.link/examples`;

axios
  .get(mainUrl)
  .then((response) => {
    scrapeMemes(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

const scrapeMemes = (html) => {
  const $ = cheerio.load(html);
  const urlMeme = $('.meme-img');

  async function downloadImage(i) {
    const url = `https://memegen.link/${urlMeme[i].attribs.src}`;
    const urlPath = path.resolve(__dirname, 'memes', `meme${i}.jpg`);
    const writer = fs.createWriteStream(urlPath);

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(writer);
  }
  for (let i = 0; i < 10; i++) {
    downloadImage(i);
  }
  console.log(`Downloaded 10 memes`);
};
