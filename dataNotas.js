const path = require("path");
const fs = require("fs");
const axios = require("axios");

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
const isFile = (route) => {
  fs.stat(route, (error, stats) => {
    if (error) {
      console.error(error);
      return;
    }
    if (stats.isFile()) {
      const routeIsFile = route;
      console.log("La ruta es un archivo");
    
  }
})
};

const isFileOrDir = (route) => {
  fs.stat(route, (error, stats) => {
    if (error) {
      console.error(error);
      return;
    }

    if (stats.isFile()) {
      const routeIsFile = route;
      console.log("La ruta es un archivo");
    } else {
      const routeIsDirectory = route;
      console.log("La ruta es un directorio");
    }
  });
};

// isFileOrDir('juanito')
isFile('juanito')

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
const findUrl = (text) => {
  const regexp = /\[(.*?)\]\((.*?)\)/g;
  const matches = text.matchAll(regexp);
  const ArrTotalLinks = [];

  for (const match of matches) {
    const linkObj = {
      text: match[1],
      link: match[2],
    };
    ArrTotalLinks.push(linkObj);
  }

  return ArrTotalLinks;
};
// const archivoMd = 'readme.md';

// fs.readFile(archivoMd, 'utf-8', (err, data) => {
//   if (err) {
//     console.error('Error al leer el archivo:', err);
//     return;
//   }

//   const regex = /\[(.*?)\]\((.*?)\)/g;
//   let match;

//   while ((match = regex.exec(data)) !== null) {
//     const textoEnlace = match[1];
//     const urlEnlace = match[2];

//     console.log('Texto del enlace:', textoEnlace);
//     console.log('URL del enlace:', urlEnlace);
//     console.log();
//   }
// });

// const findUrl =((text) => {
//     const regex = /\[(.*?)\]\((.*?)\)/g;
//     let match;

//     while ((match = regex.exec(text)) !== null) {
//       const textoEnlace = match[1];
//       const urlEnlace = match[2];

//       console.log('Texto del enlace:', textoEnlace);
//       console.log('URL del enlace:', urlEnlace);
//     }
//     });
// const findUrl =((text) => {
// const regexp = /\[(.*?)\]\((.*?)\)/g;
// // const str =
// //   "hola amigos como están, deberían visitar los siguientes links: [YouTube](www.youtube.com)";
// const matches = text.matchAll(regexp);

// for (const match of matches) {
//   console.log(
//     `text: ${match[0]} link: ${match[1]}
//     .`
//   );
// }
// });

//   const texted = 'hola amigos como están, deberían visitar los siguientes links: [YouTube](www.youtube.com)';
//   findUrl(texted);

// ************* comprobar que un href funciona *************

const urls = [
  {
    text: "Publicar packpage",
    link: "https://docs.npmjs.com/getting-started/publishing-npm-packages",
  },
  {
    text: "Crear módulos en Node.js",
    link: "https://docs.npmjs.com/getting-started/publishing-npm-packages",
  },
  {
    text: "Leer un archivo",
    link: "https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback",
  },
  {
    text: "Leer un directorio",
    link: "https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback",
  },
  { text: "Path", link: "https://nodejs.org/api/path.html" },
  {
    text: "Linea de comando CLI",
    link: "https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e",
  },
  {
    text: "recurso",
    link: "https://seoptimer.com/blog/broken-linksbael/",
  },
];

// const GotUrls = urls.map((obj)=>obj.link)
// console.log(typeof GotUrls)

// // getStatus ('https://seoptimer.com/blog/broken-linksbael/')

// const PROMESAS = GotUrls.map((url)=>getStatus(url))
// // console.log(PROMESAS)

// Promise.allSettled(PROMESAS).then((rptas)=> {
//     // console.log(typeof rptas);
//     rptas.forEach((res)=>console.log("res: ", res.value.status))
// })
// .catch((err) => console.log(err))

// console.log(PROMESAS)
// const getStatus = (url) =>{
//     return axios.get(url)
// }

// const verifyLinks = (urls) => {
//   const GotUrls = urls.map((obj) => obj.link);
//   console.log(typeof GotUrls);
//   const PROMESAS = GotUrls.map((url) => getStatus(url));
//   Promise.allSettled(PROMESAS)
//     .then((rptas) => {
//       rptas.forEach((res) => console.log("res: ", res.value.status));
//     })
//     .catch((err) => console.log(err));

//   return (console.log(PROMESAS));
// };

// const validateUrls = (urls) => {
//   const promesas = urls.map((url) => {
//     return axios.get(url.link)
//       .then(response => {
//         if (response.status === 200) {
//           console.log(`La URL ${url.link} está disponible (estado 200)`);
//         } else if (response.status === 404) {
//           console.log(`La URL ${url.link} no fue encontrada (estado 404)`);
//         }
//         return [
//           {
//             response.status
//             text:[],
//             link:href,
//           }
//         ]
//       })
//       .catch(error => {
//         console.log(`Ocurrió un error al realizar la solicitud a la URL ${url.link}:`, error.message);
//         throw error;
//       });
//   });

//   Promise.allSettled(promesas).then((results) => {
//     results.forEach((result, index) => {
//       const url = urls[index];
//       console.log(`Estado de la URL ${url.link}:`, result.status);
//     });
//   });
// };

// validateUrls(urls)

// const validateUrls = (href) => {
// return new Promise ((resolve, reject) => {
//     axios.get(href)
//   .then(response => {
//     // El estado de la respuesta se encuentra en response.status
//     if (response.status === 200) {
//       console.log('La URL está disponible (estado 200)');
//     } else if (response.status === 404) {
//       resolve (404)
//     }
//   })
//   .catch(error => {
//     console.log('Ocurrió un error al realizar la solicitud:', error.message);
//   });
// });
// };

// validateUrls('https://docs.npmjs.com/getting-started/publishing-npm-packages:');

// if validate false retornar {href,text,file}

// if validate true hacer petición http a cada href. (usar axios o fetch)

// if then respuesta valida retornar {href, text, file, status} y mensaje todo ok

// if catch respuesta invalida retornar alerta: algo fue mal.

module.exports = {
  mdExt,
  isPathAbsolute,
  readFile,
  dirFiles,
  pathAbs,
  pathExist,
  findUrl,
  // verifyLinks,
  // getStatus,
};
