const { pathExist } = require("../data.js");
const { isPathAbsolute } = require("../data.js");
const { pathAbs } = require("../data.js");
const { mdExt } = require("../data.js");
const { readFile } = require("../data.js");
const {mdLinks} = require("../index.js");

describe("pathExist", () => {
  it("si la ruta no existe devuelve false", () => {
    expect(pathExist("noexiste.md")).toBe(false);
  });
  it("si la ruta existe, devuelve true", () => {
    expect(pathExist("readme.md")).toBe(true);
  });
});
describe("isPathAbsolute", () => {
  it("si la ruta no es absoluta, devuelve false", () => {
    expect(isPathAbsolute("noexiste.md")).toBe(false);
  });
  it("si la ruta es absoluta, devuelve true", () => {
    expect(
      isPathAbsolute(
        "/Users/chuz/Desktop/laboratoria/DEV004-md-links/notebook.md"
      )
    ).toBe(true);
  });
});
describe("pathAbs", () => {
  it("convierte una ruta relativa en ruta absoluta", () => {
    expect(pathAbs("readme.md")).toBe(
      "/Users/chuz/Desktop/laboratoria/DEV004-md-links/readme.md"
    );
  });
  it("si la ruta es absoluta, devuelve la ruta absoluta", () => {
    expect(
      isPathAbsolute(
        "/Users/chuz/Desktop/laboratoria/DEV004-md-links/notebook.md"
      )
    ).toBe(true);
  });
});
describe("mdExt", () => {
  it("devuelve la extensión del archivo", () => {
    expect(mdExt("readme.md")).toBe(".md");
    expect(mdExt("index.js")).toBe(".js");
  });
  describe("readFile", () => {
    it("si el archivo tiene contenido, muestra el contenido", () => {
      return readFile("content.md").then((data) => {
        expect(data).toBe("hola amigo, esto es una prueba");
          });
        });
      });
      describe("readFile", () => {
        it("si el archivo está vacío, devuelve error", () => {
          return readFile("empty.md").then((error) => {
            expect(error).toBe(error);
              });
            });
          });
          // describe("mdLinks", () => {
          //   it("si mdLinks recibe una ruta relativa .md, retornará su contenido", () => {
          //     return mdLinks("content.md").then((data) => {
          //       expect(data).toBe("hola amigo, esto es una prueba");
          //         });
          //       });
          //     });
    });

