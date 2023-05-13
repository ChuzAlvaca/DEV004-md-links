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
        href: match[2]
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
  // console.log ('esto es urls', urls)
const GotUrls = urls.map((obj) => obj.href);
console.log(typeof GotUrls);
const PROMESAS = GotUrls.map((url) => getStatus(url));
Promise.allSettled(PROMESAS)
  .then((url) => {
    url.forEach((res,index) => {
      if( res.value !== undefined && res.value.status === 200){
        const verifiedStatus ={status: res.value.status}
        const urlsIndex = urls[index]
        const okOrFail200 = {ok: "ok"}
        const verifiedObject200 = {...urlsIndex,...verifiedStatus,...okOrFail200}
        console.log(verifiedObject200)
      }else {
        const linkNotFound = {status: 404}
        const okOrFail404 = {ok: "fail"}
        const urlsIndex404 = urls[0]
        const verifiedObject404 = { ...urlsIndex404,...linkNotFound,...okOrFail404}
        console.log(verifiedObject404)
      }
      });
  })
  .catch((error) =>  {
     console.log("error: ", error);
  })
  // console.log(PROMESAS);
  // console.log(typeof(PROMESAS))
  };

// aprovechar los indieces como parametros del foreach y retornar el objeto solicitado. 





module.exports = {
  mdExt,
  isPathAbsolute,
  readFile,
  pathAbs,
  pathExist,
  findUrl,
  verifyLinks,
};
