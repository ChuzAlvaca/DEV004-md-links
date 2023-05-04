

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

// si es un directorio: ¿tiene archivos?

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

};
