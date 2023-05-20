# Markdown Links 
#### md-links es una libreria que permite obtener de manera sencilla los links existentes en un archivo markdown .md.
#### Md-links evalua el funcionamiento de los links encontrados, para reportar cuáles son los links que funcionan y cuáles están rotos. 
# install
``` npm i luzalvaca-md-links```
# usage
### Al ejecutar lo siguiente en la línea de comandos:
``` npm run md-links archivo.md validate```
#### md-links retorna un arreglo de objetos, donde cada objeto contiene información correspondiente a cada link encontrado: 

``` [
  {
    text: 'Markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'Node.js',
    href: 'https://nodejs.org/es/',
    status: 200,
    ok: 'ok'
  },
  {
    text: 'motor de JavaScript V8 de Chrome',
    href: 'https://developers.google.com/v80998/',
    status: 404,
    ok: 'fail'
  }
]
```
### Cuando ejecutamos:
``` npm run md-links archivo.md stats```
#### md-links retorna a) el número total de links encontrados en el archivo y b) el número de links únicos (que no se repiten) presentes en el archivo. 

```
Total Links: 3
Unique Links: 3
```
### y finalmente, al ejecutar:
``` npm run md-links archivo.md stats-validate```
#### md-links retorna a) el número total de links encontrados en el archivo y b) el número de links únicos (que no se repiten) presentes en el archivo y c) el número total de los links que no funcionan correctamente.

```
Total Links: 3
Unique Links: 3
Broken Links: 1
```
# Origin story
md-links fue creada como parte del bootcamp Laboratoria, con la finalidad de aprender más acerca del uso de promesas y la asincronía en js. 
# Related
- [md-links-sr](https://www.npmjs.com/package/md-links-sr)
- [markdown-link-check](https://www.npmjs.com/package/markdown-link-check)
# Mantainers 
- [Chuz Álvarez](https://github.com/ChuzAlvaca)

# Visual representation of the process: 
![mapa API](https://imagizer.imageshack.com/img922/9223/baZFiR.png)
![mapa CLI](https://imagizer.imageshack.com/img922/4417/S6cYdt.png)