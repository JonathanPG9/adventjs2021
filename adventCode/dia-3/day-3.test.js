import isValid from './day-3'

/* El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas.
Por suerte sólo los ha dejado en medio de los paréntesis... */

describe('isValid', () => {
  let letter;
  beforeEach(() => {
    letter = "bici coche (balón) bici coche peluche"
  });
  describe('truthy cases', () => {
    test('should return true', () => {
      const result = isValid(letter);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      letter = "(muñeca) consola bici"
      const result = isValid(letter);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      letter = "(perro) moto auto"
      const result = isValid(letter);
      expect(result).toBeTruthy()
    });
  });
  describe('falsy cases', () => {
    test('should return false', () => {
      letter = ""
      const result = isValid(letter);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      letter = "(peluche {) bici"
      const result = isValid(letter);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      letter = "() bici"
      const result = isValid(letter);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      letter = "peluche (bici [coche) bici coche balón"
      const result = isValid(letter);
      expect(result).toBeFalsy()
    });
  })
});
