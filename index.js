const cheerio = require('cheerio');
const axios = require("axios");
const fs = require("fs");
const Path = require("path");

const memeFolder = './memes';

if (fs.existsSync(memeFolder)){
  console.log('meme folder exists')}
  else {
fs.mkdir("./memes", function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("memes folder created.")
    }
  })
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
  const urlMeme = $(".meme-img");
   
  console.log(`Downloaded 10 memes`);



for (let i = 0; i < 10; i++) {
   
  async function downloadImage() {  
        const url = `https://memegen.link/${urlMeme[i].attribs.src}`
        const path = Path.resolve(__dirname, 'memes', `meme${i}.jpg`)
        const writer = fs.createWriteStream(path)
      
        const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream'
        })
      
        response.data.pipe(writer)
    
      }
    

  
  downloadImage();

    }
    
  }







// PLACE FOR TESTING LOOPS TO FIX THE CODE AND MAKE IT SHORTER





  // const scrapeMemes = (html) => {
  //   const $ = cheerio.load(html);
  //   const urlMeme = $(".meme-img");
     
  //   console.log(`Downloaded 10 memes`);



// async function downloadImage1 () {  
//     const url = `https://memegen.link/${urlMeme[0].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes','meme1.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }
//   async function downloadImage2 () {  
//     const url = `https://memegen.link/${urlMeme[1].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme2.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage3 () {  
//     const url = `https://memegen.link/${urlMeme[2].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme3.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage4 () {  
//     const url = `https://memegen.link/${urlMeme[3].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme4.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage5 () {  
//     const url = `https://memegen.link/${urlMeme[4].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme5.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage6 () {  
//     const url = `https://memegen.link/${urlMeme[5].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme6.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage7 () {  
//     const url = `https://memegen.link/${urlMeme[6].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme7.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage8 () {  
//     const url = `https://memegen.link/${urlMeme[7].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme8.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage9 () {  
//     const url = `https://memegen.link/${urlMeme[8].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme9.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }

//   async function downloadImage10 () {  
//     const url = `https://memegen.link/${urlMeme[9].attribs.src}`
//     const path = Path.resolve(__dirname, 'memes', 'meme10.jpg')
//     const writer = fs.createWriteStream(path)
  
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'stream'
//     })
  
//     response.data.pipe(writer)

//   }






  


// for (let i = 0; i < 10; i++) {
   
//   async function downloadImage() {  
//         const url = `https://memegen.link/${urlMeme[i].attribs.src}`
//         const path = Path.resolve(__dirname, 'memes', `meme${i}.jpg`)
//         const writer = fs.createWriteStream(path)
      
//         const response = await axios({
//           url,
//           method: 'GET',
//           responseType: 'stream'
//         })
      
//         response.data.pipe(writer)
    
//       }
    

  
//   downloadImage();

//     }

//   }