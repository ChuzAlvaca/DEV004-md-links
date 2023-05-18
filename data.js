const path = require("path");
const fs = require("fs");
const axios = require('axios');
const chalk = require('chalk');

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
      } else if (data.length === 0) {
        reject(new Error(chalk.bgGreenBright("El archivo está vacío")));
      } else {
        resolve(data);
      }
    });
  });
};
// ************* ¿existen links? *************
const findUrl = (text) => {
  if (text.length === 0) {
    throw new Error( "no existen rutas md");
  } else {
    const regexp = /\[(.*?)\]\((.*?)\)/g;
    const matches = text.matchAll(regexp);
    const ArrTotalLinks = [];

    for (const match of matches) {
      const linkObj = {
        text: match[1],
        href: match[2],
      };
      ArrTotalLinks.push(linkObj);
    }
    // console.log('esto es ArrTotalLinks:', ArrTotalLinks.length);
    return ArrTotalLinks;
  }
};

// ************* validar que los links funcionan *************

const getStatus = (url) =>{
  return axios.get(url)
}
const verifyLinks = (urls) => {
  const GotUrls = urls.map((obj) => obj.href);
  const PROMESAS = GotUrls.map((url) => getStatus(url));
  
  return Promise.allSettled(PROMESAS)
    .then((results) => {
      return results.map((res, index) => {
        if (res.value !== undefined && res.value.status === 200) {
          const verifiedStatus = { status: res.value.status };
          const urlsIndex = urls[index];
          const okOrFail200 = { ok: "ok" };
          return {...urlsIndex, ...verifiedStatus, ...okOrFail200 };
        } else {
          const linkNotFound = { status: 404 };
          const okOrFail404 = { ok: "fail" };
          const urlsIndex404 = urls[index];
          return { ...urlsIndex404, ...linkNotFound, ...okOrFail404};
        }
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

// // aprovechar los indieces como parametros del foreach y retornar el objeto solicitado. 
module.exports = {
  mdExt,
  isPathAbsolute,
  readFile,
  pathAbs,
  pathExist,
  findUrl,
  verifyLinks,
};
