#!/usr/bin/env node
// linea para que pueda ejecutarse el comando md.links.
const mdLinks = require("./index.js");
const chalk = require("chalk");

// acá se guarda el tercer input en la terminal.
// console.log('esto es agr', process.argv[2])
const pathUser = process.argv[2];
// console.log(process.argv)

if (process.argv.includes("validate")) {
  console.log('entro')
  mdLinks(pathUser)
    .then((resv) => {
      console.log(resv);
    })
    .catch((rej) => {
      console.log(rej);
    });
} else if (
  process.argv.includes("stats") ||
  process.argv.includes("stats-validate")
) {
  mdLinks(pathUser)
    .then((resv) => {
      const totalLinks = resv.length;
      console.log(
        chalk.bgMagenta("Total Links:"),
        chalk.bgCyanBright(totalLinks)
      );
      const objValidated = resv;
      const uniqueLinks = [];
      const hrefSet = new Set();
      objValidated.forEach((obj) => {
        if (!hrefSet.has(obj.href)) {
          hrefSet.add(obj.href);
          uniqueLinks.push(obj);
        }
      });
      console.log(
        chalk.bgMagenta("Unique Links:"),
        chalk.bgCyan(uniqueLinks.length)
      );

      if (process.argv.includes("stats-validate")) {
        const brokenLinks = objValidated.filter((obj) => obj.status === 404);
        console.log(
          chalk.bgMagenta("Broken Links:"),
          chalk.bgCyan(brokenLinks.length)
        );
      }
    })
    .catch((rej) => {
      console.log(rej);
    });
} else {
  console.error(
    chalk.bgMagenta(
      "Error: Please use --validate or --stats or --stats--validate"
    )
  );
}
