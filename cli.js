
const mdLinks = require("./index.js");

// acá se guarda el tercer input en la terminal.
const pathUser = process.argv[3];

if (process.argv.includes('--validate')) {
  mdLinks(pathUser)
    .then((resv) => {
      console.log(resv);
    })
    .catch((rej) => {
      console.log(rej);
    });
} else if (process.argv.includes('--stats')) {
  console.log('typeaste stats');
} else if (process.argv.includes('--stats--validate')) {
  console.log('typeaste --stats--validate');
} else {
  console.error('Error: Please use --validate or --stats or --stats--validate');
}





// if (process.argv.includes('--validate')) {
//   mdLinks(pathUser)
//     .then((resv) => {
//       console.log(resv);
//     })
//     .catch((rej) => {
//       console.log(rej);
//     })
//     }
//   else {
//     console.error('Error: Please use the --validate option');
//   }





// mdLinks(pathUser)
//   .then((resv) => {
//     console.log(resv);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
  
  
   
  
// if(!process.argv.includes('--validate') || !process.argv.includes('--stats') ){
//   throw ('try with: --validate or --stats or --stats--validate')
// }else if (process.argv.includes('--stats'))
// {
//   console.log('No hay validate');

// }