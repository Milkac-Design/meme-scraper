const cheerio = require('cheerio');
const axios = require("axios");
const fs = require("fs");
const Path = require("path");


fs.mkdir("./memes", function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New directory successfully created.")
    }
  })


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
    const urlMeme = $(".meme-img");
    const indexValue1 = 0;
    const indexValue2 = 1;
    const indexValue3 = 2;
    const indexValue4 = 3;
    const indexValue5 = 4;
    const indexValue6 = 5;
    const indexValue7 = 6;
    const indexValue8 = 7;
    const indexValue9 = 8;
    const indexValue10 = 9;
    console.log(`Downloaded 10 memes`);



async function downloadImage1 () {  
    const url = `https://memegen.link/${urlMeme[indexValue1].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme1.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }
  async function downloadImage2 () {  
    const url = `https://memegen.link/${urlMeme[indexValue2].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme2.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage3 () {  
    const url = `https://memegen.link/${urlMeme[indexValue3].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme3.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage4 () {  
    const url = `https://memegen.link/${urlMeme[indexValue4].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme4.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage5 () {  
    const url = `https://memegen.link/${urlMeme[indexValue5].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme5.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage6 () {  
    const url = `https://memegen.link/${urlMeme[indexValue6].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme6.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage7 () {  
    const url = `https://memegen.link/${urlMeme[indexValue7].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme7.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage8 () {  
    const url = `https://memegen.link/${urlMeme[indexValue8].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme8.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage9 () {  
    const url = `https://memegen.link/${urlMeme[indexValue9].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme9.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }

  async function downloadImage10 () {  
    const url = `https://memegen.link/${urlMeme[indexValue10].attribs.src}`
    const path = Path.resolve(__dirname, 'memes', 'meme10.jpg')
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)

  }
  
  downloadImage1()  
  downloadImage2()  
  downloadImage3()  
  downloadImage4()  
  downloadImage5()  
  downloadImage6()  
  downloadImage7()  
  downloadImage8()  
  downloadImage9()  
  downloadImage10()  

  };

  