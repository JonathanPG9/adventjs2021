import decodeNumber from "./day-16"

/* Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.
Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.
Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱
Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto.
¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN: */

describe('decodeNumber', () => {
  test('should return 3', () => {
    expect(decodeNumber('...')).toBe(3)
  });
  test('should return 4', () => {
    expect(decodeNumber('.,')).toBe(4)
  });
  test('should return 6', () => {
    expect(decodeNumber(',.')).toBe(6)
  });
  test('should return 107', () => {
    expect(decodeNumber('.........!')).toBe(107)
  });
  test('should return 49', () => {
    expect(decodeNumber('.;')).toBe(49)
  });
  test('should return 5', () => {
    expect(decodeNumber('..,')).toBe(5)
  });
  test('should return 300', () => {
    expect(decodeNumber('!!!')).toBe(300)
  });
  test('should return 49', () => {
    expect(decodeNumber('.;!')).toBe(49)
  });
  test('should return NaN', () => {
    expect(decodeNumber(';.W')).toBeNaN()
  });
  test('should return NaN', () => {
    expect(decodeNumber(';AL')).toBeNaN()
  });
})