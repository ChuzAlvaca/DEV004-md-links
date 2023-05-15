
const mdLinks = require("./index.js");

// acá se guarda el tercer input en la terminal.
const pathUser = process.argv[3];

mdLinks(pathUser)
  .then((resv) => {
    console.log(resv);
  })
  .catch((rej) => {
    console.log(rej);
  });
  

if(process.argv.includes('validate') || process.argv.includes('-v') ){
  console.log('Tiene validate');
}else if (process.argv.includes('stats'))
{
  console.log('No hay validate');

}