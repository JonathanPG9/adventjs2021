import sumPairs from './day-6'
/* 
Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱
A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.
La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen,
se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.
Si no se encuentra, se devuelve null.
*/
describe('sumPairs', () => {
  let numbers = [3, 5, 7, 2],
      number = 10;
  test('should return [3,7]', () => {
    const result = sumPairs(numbers,number)
    expect(result).toEqual([3,7])
  });
  test('should return null', () => {
    numbers = [-3, -2, 7, -5];
    number =  10;
    const result = sumPairs(numbers,number)
    expect(result).toBeNull()
  });
  test('should return [2,2]', () => {
    numbers = [2, 2, 3, 1];
    number =  4;
    const result = sumPairs(numbers,number)
    expect(result).toEqual([2,2])
  });
  test('should return [6, 2]', () => {
    const result = sumPairs([6, 7, 1, 2], 8);
    expect(result).toEqual([6,2]);
  });
  test('should return [1,5]', () => {
    const result = sumPairs([0, 2, 2, 3, -1, 1, 5], 6)
    expect(result).toEqual([1,5])
  });
  test('should return null', () => {
    const result = sumPairs([6, 7, 1, 2], 15);
    expect(result).toBeNull();
  });
  test('should return null', () => {
    const result = sumPairs([6, 1,], 23);
    expect(result).toBeNull();
  });
  test('should return [1000,2]', () => {
    const result = sumPairs([1000,1,3,4,2,1,], 1002);
    expect(result).toEqual([1000,2]);
  });
});