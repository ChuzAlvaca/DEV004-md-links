
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
  

