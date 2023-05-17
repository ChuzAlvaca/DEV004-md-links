const mdLinks = require("./index.js");
const chalk = require('chalk');

// acá se guarda el tercer input en la terminal.
const pathUser = process.argv[3];

if (process.argv.includes("--validate")) {
  (mdLinks)(pathUser)
    .then((resv) => {
      console.log(resv);
    })
    .catch((rej) => {
      console.log(rej);
    });
} else if (process.argv.includes("--stats")) {
  mdLinks(pathUser)
    .then((resv) => {
      const totalLinks = resv.length;
      console.log(chalk.bgMagenta("Total Links:"), chalk.bgCyanBright(totalLinks));
    })
    .catch((rej) => {
      console.log(rej);
    });
} else if (process.argv.includes("--stats--validate")) {
  mdLinks(pathUser)
    .then((resv) => {
      console.log(chalk.bgMagenta('typeaste --stats--validate'))
    })
    .catch((rej) => {
      console.log(rej);
    });
} else {
  console.error(chalk.bgMagenta("Error: Please use --validate or --stats or --stats--validate"));
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
