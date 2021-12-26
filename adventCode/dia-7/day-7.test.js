import contains from "./day-7";

/* Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.
Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos: */

describe('contains', () => {
  let almacen;
  beforeEach(() => {
    almacen = {
      'estanteria1': {
        'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
        }
      },
      'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta'
        }
      }
    } 
  })
  describe('truthy cases',() => {
    test('should return true', () => {
      const result = contains(almacen,'camiseta')
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = contains(almacen,'fanta')
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      delete almacen['estanteria2'];
      almacen['newEstanteria'] = {'cajon1': 'pantalones'}
      const result = contains(almacen,'pantalones')
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      delete almacen['estanteria1'];
      delete almacen['estanteria2'];
      almacen['estante'] = {'cajon1': 'sandalias'}
      const result = contains(almacen,'sandalias')
      expect(result).toBeTruthy()
    });
  })
  describe('falsy cases',() => {
    test('should return false', () => {
      const result = contains(almacen,'pokemon')
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      const result = contains(almacen,'nintendo')
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      almacen = {}
      const result = contains(almacen,'algo')
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      delete almacen['estanteria1'];
      const result = contains(almacen,'fanta')
      expect(result).toBeFalsy()
    });
  })
})