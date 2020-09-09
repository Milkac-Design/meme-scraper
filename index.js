const cheerio = require('cheerio');
const axios = require("axios");
const fs = require("fs");



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
    console.log(`Your memes are:\n https://memegen.link/${urlMeme[indexValue1].attribs.src}
    https://memegen.link/${urlMeme[indexValue2].attribs.src}
    https://memegen.link/${urlMeme[indexValue3].attribs.src}
    https://memegen.link/${urlMeme[indexValue4].attribs.src}
    https://memegen.link/${urlMeme[indexValue5].attribs.src}
    https://memegen.link/${urlMeme[indexValue6].attribs.src}
    https://memegen.link/${urlMeme[indexValue7].attribs.src}
    https://memegen.link/${urlMeme[indexValue8].attribs.src}
    https://memegen.link/${urlMeme[indexValue9].attribs.src}
    https://memegen.link/${urlMeme[indexValue10].attribs.src}`);



// fs.writeFile( "meme1.jpg" ,`https://api.memegen.link/images/${urlMeme[indexValue2].attribs.src}`, function (err) { 
//     if (err)
// console.log(err);
//     else
// console.log('Append operation complete.');
// });
  };