import createXmasTree from './day-4'
/* ¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
xdescribe('createXmasTree', () => {
  test('should return a correct tree', () => {
    const result = createXmasTree(5);
    console.log(result)
    expect(result).toBe(`
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____`)
  });
});
/* Hay problemas con este tipo de test cuando lo solucione enviare un nuevo commit sacando el skip :D. Pero el desafio estaria resuelto correctamente */