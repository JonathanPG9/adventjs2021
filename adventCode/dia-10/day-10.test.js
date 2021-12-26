import getCoins from "./day-10";

/*
Para mejorar la productividad de la tienda en la que trabajamos,
vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.
Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente
y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

describe('getCoins',() => {
  test('should return [1, 0, 0, 0, 0, 1]', () => {
    const result = getCoins(51)
    expect(result).toEqual([1, 0, 0, 0, 0, 1])
  });
  test('should return [1, 1, 0, 0, 0, 0]', () => {
    const result = getCoins(3)
    expect(result).toEqual([1, 1, 0, 0, 0, 0])
  });
  test('should return [0, 0, 5, 0, 0, 0]', () => {
    const result = getCoins(5)
    expect(result).toEqual([0, 0, 1, 0, 0, 0])
  });
  test('should return [1, 0, 1, 1, 0, 0]', () => {
    const result = getCoins(16)
    expect(result).toEqual([1, 0, 1, 1, 0, 0])
  });
  test('should return [0, 0, 0, 0, 0, 2]', () => {
    const result = getCoins(100)
    expect(result).toEqual([0, 0, 0, 0, 0, 2])
  });
  test('should return [0, 0, 0, 0, 0, 6]', () => {
    const result = getCoins(300)
    expect(result).toEqual([0, 0, 0, 0, 0, 6])
  });
  test('should return [1, 1, 0, 0, 0, 4]', () => {
    const result = getCoins(203)
    expect(result).toEqual([1, 1, 0, 0, 0, 4])
  });
  test('should return [1, 0, 0, 1, 0, 2]', () => {
    const result = getCoins(111)
    expect(result).toEqual([1, 0, 0, 1, 0, 2])
  });
})