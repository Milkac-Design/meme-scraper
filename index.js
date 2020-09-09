const fetch = require('node-fetch');
const cheerio = require('cheerio');
const axios = require("axios");


// (async () => {
// 	const response = await fetch('https://memegen.link/bender/your_text/goes_here.jpg?preview=true&watermark=none&share=true');
// 	const body = await response.blob();

// 	console.log(body);
// })();


//var myImage = document.querySelector('img');

// fetch('https://memegen.link/bender/your_text/goes_here.jpg').then(function(response) {
//     return response.blob();
//   }).then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });




//   fetch('https://memegen.link/bender/your_text/goes_here.jpg')
//   .then(response => response.blob())
//   .then(data => console.log(data));
// 







  const mainUrl = `https://memegen.link/examples`;

  axios
  .get(mainUrl)
  .then((response) => {
      dealWithData(response.data);
  })
  .catch((err) => {
      console.log(err);
  });
  const dealWithData = (html) => {
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
    console.log(`Your memes are:\n${urlMeme[indexValue1].attribs.src}
    ${urlMeme[indexValue2].attribs.src}
    ${urlMeme[indexValue3].attribs.src}
    ${urlMeme[indexValue4].attribs.src}
    ${urlMeme[indexValue5].attribs.src}
    ${urlMeme[indexValue6].attribs.src}
    ${urlMeme[indexValue7].attribs.src}
    ${urlMeme[indexValue8].attribs.src}
    ${urlMeme[indexValue9].attribs.src}
    ${urlMeme[indexValue10].attribs.src}`);
};
