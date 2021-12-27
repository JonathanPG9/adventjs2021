import missingReindeer from "./day-14"

/* ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱
Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! 
A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.
👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.
👎 Lo malo: la lista está desordenada y podría faltar el último...
Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta: */

describe('missingReindeer', () => {
  test('should return missing reindeer', () => {
    expect(missingReindeer([0, 2, 3])).toBe(1)
  });
  test('should return missing reindeer', () => {
    expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4)
  });
  test('should return missing reindeer', () => {
    expect(missingReindeer([0, 2, 3])).toBe(1)
  });
  test('should return missing reindeer', () => {
    expect(missingReindeer([0, 1])).toBe(2)
  });
  test('should return missing reindeer', () => {
    expect(missingReindeer([3, 0, 1])).toBe(2)
  });
  test('should return missing reindeer', () => {
    expect(missingReindeer([0,1,5,4,10,23,41,2,3])).toBe(6)
  });
  test('should return missing reindeer', () => {
    expect(missingReindeer([])).toBe(0)
  });
})