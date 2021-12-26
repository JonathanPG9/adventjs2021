import contarOvejas from './day-1'
/* Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras N y A
sin importar el orden, las mayúsculas o espacios. */
describe('contarOvejas', () => {
  let ovejas;
  beforeEach(() => {
    ovejas = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo'},
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo'}
    ]
  });
  describe('truthy cases', () => {
    test('should return true', () => {
      const result = contarOvejas(ovejas);
      expect(result).toEqual([
        {name: 'Navidad', color: 'rojo' },
        {name: 'Ki Na Ma', color: 'rojo' }
      ]);
    });
    test('should return true', () => {
      ovejas.push({name:"nyar", color:"rojo"})
      const result = contarOvejas(ovejas);
      expect(result).toEqual([
        {name: 'Navidad', color: 'rojo' },
        {name: 'Ki Na Ma', color: 'rojo' },
        {name:'nyar', color:'rojo'}
      ]);
    });
  });
  describe('falsy cases', () => {
    test('should return empty array', () => {
      ovejas = [];
      const result = contarOvejas(ovejas);
      expect(result).toEqual([])
    });
    test('should return empty array', () => {
      ovejas[2] = {name:'null',color:'azul'};
      ovejas[3] = {name:'null',color:'azul'};
      const result = contarOvejas(ovejas);
      expect(result).toEqual([])
    });
  })
});
