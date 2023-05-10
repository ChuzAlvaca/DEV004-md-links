const fs = require("fs");
const { isPathAbsolute } = require("./data");
const { pathAbs } = require("./data");
const { pathExist } = require("./data");
const { readFile } = require("./data");
const {mdExt} = require("./data");


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
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      }
    }
  });
};


module.exports = mdLinks;

