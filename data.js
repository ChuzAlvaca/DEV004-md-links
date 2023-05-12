const path = require("path");
const fs = require("fs");
const axios = require('axios');

// ***************LA RUTA EXISTE****************
const pathExist = (route) => fs.existsSync(route);

//  *************** la ruta es absoluta?  ***************
const isPathAbsolute = (route) => path.isAbsolute(route);

//  ***************si no es absoluta, conviertela a absoluta: ***************
const pathAbs = (route) => path.resolve(route);

//************* ¿la ruta es .md? *************
const mdExt = (route) => path.extname(route);

// ************* si el archivo es .md, lee el archivo *************
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataResolved = data;
        console.log(dataResolved);
        resolve (dataResolved);
      }
    });
  });
};
// ************* ¿existen links? *************
const findUrl = (text) => {
    const regexp = /\[(.*?)\]\((.*?)\)/g;
    const matches = text.matchAll(regexp);
    const ArrTotalLinks = [];
  
    for (const match of matches) {
      const linkObj = {
        text: match[1],
        link: match[2]
      };
      ArrTotalLinks.push(linkObj);
    }
  
    return ArrTotalLinks;
  };

// ************* validar que los links funcionan *************

const getStatus = (url) =>{
  return axios.get(url)
}

const verifyLinks = (urls) => {
  console.log ('esto es urls', urls)
const GotUrls = urls.map((obj) => obj.link);
console.log(typeof GotUrls);
const PROMESAS = GotUrls.map((url) => getStatus(url));
Promise.allSettled(PROMESAS)
  .then((rptas) => {
    rptas.forEach((res) => {
      if( res.value !== undefined){
        console.log("res: ", res.value.status)
      }else {
        
      }
      });
  })
  .catch((error) =>  {
     console.log("error: ", error);
  })
  console.log(PROMESAS);
  console.log(typeof(PROMESAS))
  };







module.exports = {
  mdExt,
  isPathAbsolute,
  readFile,
  pathAbs,
  pathExist,
  findUrl,
  verifyLinks,
};
