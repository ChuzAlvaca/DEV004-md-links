const fs = require("fs");
const { isPathAbsolute } = require("./data.js");
const { pathAbs } = require("./data.js");
const { pathExist } = require("./data.js");
const { readFile } = require("./data.js");
const {mdExt} = require("./data.js");
const {findUrl} = require("./data.js")
const {verifyLinks} = require("./data.js")


const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!pathExist(path)) {
      reject("La ruta no existe");
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
        reject('Ruta inválida, ingresa una ruta .md');
      }
      if (lila) {
        readFile(lila)
          .then((data) => {
            const mdData = data;
            if (mdData) {
              const urlsFound = findUrl(mdData);
              if (urlsFound) {
             const verifiedLinks = verifyLinks(urlsFound)
            //  resolve (verifiedLinks)
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

// const mdLinks = (path, options) => {
//   return new Promise((resolve, reject) => {
//     if (!pathExist(path)) {
//       reject("La ruta no existe");
//     } else {
//       let routeAbs;
//       if (!isPathAbsolute(path)) {
//         routeAbs = pathAbs(path);
//       } else {
//         routeAbs = path;
//       }
//       const isMdRoute = (mdExt(routeAbs) === '.md')
//       let lila;
//       if (isMdRoute) {
//         lila = path;
//       } else {
//         reject('Ruta inválida, ingresa una ruta .md');
//       }
//       if (lila) {
//         readFile(lila)
//           .then((data) => {
//             const mdData = data;
//             if (mdData) {
//               const urlsFound = findUrl(mdData);
//               if (urlsFound) {
//              resolve (verifyLinks(urlsFound)
//           }
//               }
//           })
//           .catch((err) => {
//             reject(err);
//           });
//       }
//     }
//   });
// };


// const mdLinks = (path, options) => {
//   return new Promise((resolve, reject) => {
//     if (!pathExist(path)) {
//       reject("la ruta no existe");
//     } else {
//       let routeAbs;
//       if (!isPathAbsolute(path)) {
//         routeAbs = pathAbs(path);
//       } else {
//         routeAbs = path;
//       }
//       const isMdRoute = (mdExt(routeAbs) === '.md')
//       let lila;
//       if (isMdRoute) {
//         lila = path;
//       } else {
//         resolve ('ruta inválida, ingresa una ruta .md')
//       }
//       if (lila) {
//         readFile(lila).then((data) => {
//           const mdData = data;
//           if (mdData) {
//             const urlsFound = findUrl(mdData)
//           }
      
//         }).catch((err) => {
//           reject(err);
//         });
//         if (urlsFound){
//           const urlStatus= validateUrl(urlsFound)
//           resolve (urlStatus)
//         }
//       }
     
//     }
//   });
// };


module.exports = mdLinks;

