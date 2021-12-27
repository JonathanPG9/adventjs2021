import getMinJump from "./day-12";

/* En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.
La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.
El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 
aunque al menos nunca la posición 0 puede tener un obstáculo.
Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱
Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta. 
Ejemplo 
// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

describe('getMinJump',() => {
  let obstacles = [5, 3, 6, 7, 9]
  test('should return 4 when obstacles are [5,3,6,7,9]', () => {
    const result = getMinJump(obstacles);
    expect(result).toBe(4);
  });
  test('should return 8 when obstacles are [1,3,4,5,6,7,9]', () => {
    obstacles = [1,3,4,5,6,7,9];
    const result = getMinJump(obstacles);
    expect(result).toBe(8);
  });
  test('should return 5 when obstacles are [3,6,4,7,9]', () => {
    obstacles = [3,6,4,7,9];
    const result = getMinJump(obstacles);
    expect(result).toBe(5);
  });
  test('should return 2 when obstacles are [1,3]', () => {
    obstacles = [1,3];
    const result = getMinJump(obstacles);
    expect(result).toBe(2);
  });
  test('should return 6 when obstacles are [5,3,7,4,8,2]', () => {
    obstacles = [5,3,7,4,8,2];
    const result = getMinJump(obstacles);
    expect(result).toBe(6);
  });
  test('should return 9 when obstacles are [5,3,6,7,4,8,2]', () => {
    obstacles = [5,3,6,7,4,8,2];
    const result = getMinJump(obstacles);
    expect(result).toBe(9);
  });
})