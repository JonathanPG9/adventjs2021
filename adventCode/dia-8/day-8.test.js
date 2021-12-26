import maxProfit from "./day-8";

/* Invertir en criptomonedas es casi un deporte de riesgo.
El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.
Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos
devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.
La lista de precios es un array de números y representa el tiempo de izquierda a derecha.
Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no
puedes vender a un precio que esté a la izquierda de la compra.
*/

describe('maxProfit', () => {
  test('should return 16', () => {
    const result = maxProfit([39, 18, 29, 25, 34, 32, 5]) // -> 16 (compra a 18, vende a 34)
    expect(result).toBe(16)
  });
  test('should return 60', () => {
    const result = maxProfit([10, 20, 30, 40, 50, 60, 70]) // -> 60 (compra a 10, vende a 60)
    expect(result).toBe(60)
  });
  test('should return 61', () => {
    const result = maxProfit([39, 100, 29]) // -> 61 (compra a 29, vende a 100)
    expect(result).toBe(61)
  });
  test('should return 54', () => {
    const result = maxProfit([1, 18, 29, 55, 23, 12, 2]) // -> 54 (compra a 1, vende a 55)
    expect(result).toBe(54)
  });
  test('should return -1', () => {
    const result = maxProfit([3,3,3,3,3,3,3]) // -> -1 no hay ganancia posible
    expect(result).toBe(-1)
  });
  test('should return -1', () => {
    const result = maxProfit([50,3]) // -> -1 no hay ganancia posible
    expect(result).toBe(-1)
  });
});