

// *************identifica si la ruta existe*************
// no es necesario que sea promesa.
const fs = require('fs');
const existRoute = (path, options) => {
return new Promise((resolve,reject) => {
if (fs.existsSync(path)) {
console.log('si existe');
}
else {
// si no existe la ruta, rechaza la promesa
reject('La ruta no existe');
} 
});
}
// *************¿la ruta es relativa o absoluta?*************
const path = require('path');

const promiseAbsPath = (route) => {
    return new Promise((resolve,reject) => {
        const isAbsRoute = path.isAbsolute(route)
        if(isAbsRoute == route){
            console.log(route);
    }
    // Si la ruta es relativa, convertirla a absoluta
    else {
        console.log( path.resolve(route));
    // si no existe la ruta, rechaza la promesa
    } 
    });
    }
// *************¿la ruta, es un archivo o un directorio?*************

const isFileOrDir = (route) => {
    fs.stat(route, (error, stats) => {
        if (error) {
            console.log(error);
        }
        else {
            const routeIsFile = ("Path is file:", stats.isFile());
            if (routeIsFile === true) {
                console.log('la ruta es un archivo')
            }
            else {
                const routeIsDoc = ("Path is directory:", stats.isDirectory());
                if (routeIsDoc === true) {
                    console.log('la ruta es un directorio')
                }
            }
            }
        });
}
// ************* si es un archivo: lee el archivo *************
const readFile = (path = './notebook.md') => {
return new Promise((resolve, reject) => {
    fs.readFile(path,'utf-8', (err,data)=> {
        if (err){
            reject(err)
        } else{
            resolve(data)
            console.log(data)
        }
    });
});
}

        



// ************* si es un directorio: ¿tiene archivos? *************
// Node.js program to demonstrate the
// fs.readdirSync() method

// Import the filesystem module
// const fs = require('fs');

// Function to get current filenames
// in directory
// filenames = fs.readdirSync(__dirname);

// console.log("\nCurrent directory filenames:");
// filenames.forEach(file => {
// console.log(file);
// });

// // Function to get current filenames
// // in directory with "withFileTypes"
// // set to "true"

// fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });

// console.log("\nCurrent directory files:");
// fileObjs.forEach(file => {
// console.log(file);
// });

// ************* abrirlo y leer los archivos *************


// ¿existen links?

// false: error

// true:

//************* ¿existen rutas .md? *************

const mdExt = (pathname, options) => {
    return new Promise((resolve,reject) => {
    const pathNameDef = path.extname(pathname);
        if (pathNameDef == path.extname('hello.md')) {
    console.log('es archivo md');
        }
        else{
            reject('no existe archivo md');
    } 
    });
    }


// ejecutar validate

// if validate false retornar {href,text,file}

// if validate true hacer petición http a cada href. (usar axios o fetch)

// if respuesta valida retornar {href, text, file, status} y mensaje todo ok

// if respuesta invalida retornar alerta: algo fue mal.

module.exports = {
existRoute,
mdExt,
promiseAbsPath,
isFileOrDir,
readFile,

};
