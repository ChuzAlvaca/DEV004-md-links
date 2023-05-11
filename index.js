const fs = require("fs");
const { isPathAbsolute } = require("./data.js");
const { pathAbs } = require("./data.js");
const { pathExist } = require("./data.js");
const { readFile } = require("./data.js");
const {mdExt} = require("./data.js");
const {findUrl} = require("./data.js")

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!pathExist(path)) {
      reject("la ruta no existe");
    } else {
      let routeAbs;
      if (!isPathAbsolute(path)) {
        routeAbs = pathAbs(path);
      } else {
        routeAbs = path;
      }
      const isMdRoute = (mdExt(routeAbs) === '.md')
      let lila;
      if (isMdRoute) {
        lila = path;
      } else {
        resolve ('ruta inválida, ingresa una ruta .md')
      }
      if (lila) {
        readFile(lila).then((data) => {
          const mdData = data;
          if (mdData) {
            const urlsFound = findUrl(mdData)
            resolve (urlsFound)
          }
        }).catch((err) => {
          reject(err);
        });
      }
     
    }
  });
};


module.exports = mdLinks;

