
const {mdExt} = require ('./index.js');
const {existRoute} = require ('./index.js');
const {promiseAbsPath} = require ('./index.js');
const {isFileOrDir} = require ('./index.js');
const {readFile} = require ('./index.js');


// acá se guarda el tercer input en la terminal.
const pathUser = process.argv[2];

existRoute(pathUser).then(() => {console.log('la ruta sí existe');})
.catch((error)=>{console.log(error)}); 

promiseAbsPath(pathUser).then(() => {console.log('hola');})
.catch((error)=>{console.log(error)}); 

isFileOrDir(pathUser);

mdExt(pathUser).then(()=> {console.log('la ruta es un archivo md');})
.catch((error)=>{console.log('la ruta no es un archivo md')});

readFile(pathUser).then(()=> {console.log('la ruta es un archivo md');})
.catch((error)=>{console.log('la ruta no es un archivo md')});