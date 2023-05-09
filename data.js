const path = require("path");
const fs = require("fs");
// notas OH LUNA
// refactorizar, solo devuelve un booleano, no hay errores. no es necesario darle tantas vueltas.
// cuando algo devuelva una promesa, entonces si hay que usar then y catch
// ***************LA RUTA EXISTE****************
const pathExist = (route) => fs.existsSync(route);
// const pathExist = (route) => {
//     if (fs.existsSync(route)===true){
//         route = route
//     }else{
//         throw "La ruta que ingresaste no existe"
//     }
// }

//  *************** la ruta es absoluta?  ***************
const isPathAbsolute = (route) => path.isAbsolute(route);

//  ***************si no es absoluta, conviertela a absoluta: ***************
const pathAbs = (route) => path.resolve(route);
// console.log('ESTO ES PATHABBS',path.resolve())
// if(path.isAbsolute(route)){
//     return route
// }else{

// }
// *************¿la ruta, es un archivo o un directorio?*************

//   const isFileOrDir = (route) => {
//     fs.stat(route, (error, stats) => {
//       if (error) {
//         callback(error, null);
//       } else if (stats.isFile()) {
//         callback(null, 'archivo');
//       } else if (stats.isDirectory()) {
//         callback(null, 'directorio');
//       }
//     });
//   };
// const isFileOrDir = (route) => fs.stat.isFile(route);
// console.log ('esto es fileordir parametro',)
const isFileOrDir = (route) => {
  fs.stat(route, (error, stats) => {
    if (error) {
      resolve(error);
    } else {
      const routeIsFile = ("Path is file:", stats.isFile());
      if (routeIsFile === true) {
        console.log("la ruta es un archivo");
      } else {
        const routeIsDoc = ("Path is directory:", stats.isDirectory());
        if (routeIsDoc === true) {
          console.log("la ruta es un directorio");
        }
      }
    }
  });
};

// isFileOrDir ('/Users/chuz/Desktop/laboratoria/DEV004-md-links/notebook.md');

// const isFileOrDirSimple = (route) => {
//     fs.stats((route) => {
//     if (route.isFile()) {
//         const isFile= route;
//         return route;
//     }

//     else {
//         const isDirectory = route
//         return route;
//     }
//     };
// }

// isFileOrDirSimple ('/Users/chuz/Desktop/laboratoria/DEV004-md-links/notebook.md');

//************* ¿la ruta es .md? *************

const mdExt = (route) => path.extname(route);
// //   const pathNameDef = path.extname(route);
// //   if (pathNameDef == path.extname("hello.md")) {
// //     const routeIsMd = pathNameDef ;
// //     return routeIsMd
// //   } else {
// //     return (console.log("no existe archivo md"));
// //   }
// // };
// console.log(mdExt('readme.js'))
// ************* si el archivo es lee el archivo *************
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataResolved = data;
        resolve(dataResolved);
        console.log(dataResolved);
      }
    });
  });
};
// readFile("notebook.md")
// ************* si es un directorio: ¿tiene archivos? *************
const dirFiles = (route) => {
  return new Promise((resolve, reject) => {
    let filenames = fs.readdirSync(route, { withFileTypes: true });
    // con { withFileTypes: true } es obj y no solo string.
    console.log("\nCurrent directory filenames:");
    filenames.forEach((file) => {
      console.log(file);
      console.log(typeof file.name);
    });
  });
};
// ************* abrir directorio y leer los archivos *************
// creo que se puede reutilizar la funcion de leer archivos.
// no creo que sea necesario hgacer una nueva.

// ************* ¿existen links? *************
const findUrls = (text) => {
  // método match js. argumneto (regex, expresion regular)

  const result = text.match(/\bhttps?:\/\/\S+\b/g);
  return result;
};

// false: error

// true:

// ejecutar validate

// if validate false retornar {href,text,file}

// if validate true hacer petición http a cada href. (usar axios o fetch)

// if then respuesta valida retornar {href, text, file, status} y mensaje todo ok

// if catch respuesta invalida retornar alerta: algo fue mal.

module.exports = {
  mdExt,
  isPathAbsolute,
  readFile,
  dirFiles,
  findUrls,
  pathAbs,
  pathExist,
};
