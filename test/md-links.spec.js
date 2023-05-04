const {mdLinks} = require('../index.js');
const {mdExt} = require('../index.js');

// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });
//   it('debería devolver una promesa', () => {
//     expect(mdLinks()).toBe(typeof Promise);
//     console.log('FIX ME!');
//   });
  it('cuando el path no existe, rechaza la promesa', () => {
    return (mdLinks("/erika/cursos/noexiste.md")).catch((error)=>{
    expect(error).toBe('La ruta no existe')
    })
    console.log('FIX ME!');
  });
// });
it('cuando el path no es md, rechaza la promesa',() => {
  return (mdExt("/erika/cursos/noexiste.js")).catch((error)=>{
  expect(error).toBe('no existe archivo md')
  })
  console.log('FIX ME!');
});
