const fs = require("fs");
const { isPathAbsolute } = require("./data");
const { pathAbs } = require("./data");
const { pathExist } = require("./data");
const { readFile } = require("./data");

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
      readFile(routeAbs).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    }
  });
};


// const mdLinks = (path, options) => {
//   return new Promise((resolve, reject) => {
//     if (!pathExist(path)) {
//       reject("la ruta no existe");
//     } else {
//       if (!isPathAbsolute(path)) {
//         const routeAbs = pathAbs(path);
      
//       } else {
//         const routeAbs = path;
//         then((routeAbs) => {
//         return (readFile(routeAbs))
//         });
//         resolve(console.log("esto es routeAbs", routeAbs));
//       };
    
//   });
// };

// mdLinks('notebook.md')

module.exports = mdLinks;
// *************¿la ruta es relativa o absoluta?*************
// siempre verificar que las rutas guardadas sean absolutas
