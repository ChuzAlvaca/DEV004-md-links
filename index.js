const fs = require("fs");
const chalk = require ('chalk')
const { isPathAbsolute } = require("./data.js");
const { pathAbs } = require("./data.js");
const { pathExist } = require("./data.js");
const { readFile } = require("./data.js");
const { mdExt } = require("./data.js");
const { findUrl } = require("./data.js");
const { verifyLinks } = require("./data.js");


const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!pathExist(path)) {
      reject(chalk.bgCyanBright("La ruta no existe"));
    } else {
      let routeAbs;
      if (!isPathAbsolute(path)) {
        routeAbs = pathAbs(path);
      } else {
        routeAbs = path;
      }
      const isMdRoute = mdExt(routeAbs) === ".md";
      let lila;
      if (isMdRoute) {
        lila = path;
      } else {
        reject(chalk.bgMagenta("Ruta inválida, ingresa una ruta .md"));
      }
      if (lila) {
        readFile(lila)
          .then((data) => {
            const mdData = data;
            if (mdData) {
              const urlsFound = findUrl(mdData);
              if (urlsFound) {
                const verifiedLinks = verifyLinks(urlsFound);
                resolve(verifiedLinks)
              }
            }
          })
          .catch((err) => {
            reject(err);
          });
      }
    }
  });
};
// mdLinks('content.md')
//   .then((resv) => {
//     console.log(typeof (resv[0].href)) // Aquí puedes obtener los enlaces verificados y trabajar con ellos
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
module.exports = mdLinks


