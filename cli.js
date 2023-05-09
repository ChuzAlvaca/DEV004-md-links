
const mdLinks = require("./index.js");

// acá se guarda el tercer input en la terminal.
const pathUser = process.argv[2];

mdLinks(pathUser)
  .then((resv) => {
    console.log(resv);
  })
  .catch((rej) => {
    console.log(rej);
  });
  

// existRoute(pathUser)
//   .then(() => {
//     console.log();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promiseAbsPath(pathUser)
//   .then(() => {
//     console.log("hola");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// isFileOrDir(pathUser);

// mdExt(pathUser)
//   .then(() => {
//     console.log("la ruta es un archivo md");
//   })
//   .catch((error) => {
//     console.log("la ruta no es un archivo md");
//   });

// readFile(pathUser)
//   .then(() => {
//     console.log("la ruta es un archivo md");
//   })
//   .catch((error) => {
//     console.log("la ruta no es un archivo md");
//   });

// dirFiles(pathUser)
//   .then(() => {})
//   .catch((error) => {
//     console.log("la ruta no es un directorio");
//   });

// findUrls("hola como estas, youtube.com"); // creo que  el parametro seria el resultado de  readfile.
