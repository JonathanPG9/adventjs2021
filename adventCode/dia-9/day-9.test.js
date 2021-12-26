import groupBy from "./day-9";

/* En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅
Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array,
que puede ser de valores u objetos, a través de una función o de una propiedad. */

describe('groupBy', () => {
  describe('funciones', () => {
    test('should return { 6: [6.1, 6.3], 4: [4.2] }', () => {
      const result = groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
      expect(result).toEqual({ 6: [6.1, 6.3], 4: [4.2] })
    });
    test('should return { 2013: [1363223700000], 2014: [1397639141184] }', () => {
      const result = groupBy(
        [1397639141184, 1363223700000],
        timestamp => new Date(timestamp).getFullYear()
      )
      expect(result).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
    });
    test('should return { 4: [ 4.2 ], 6: [ 6.1, 6.3 ] }', () => {
      const result = groupBy([6.1, 4.2, 6.3], Math.round)
      expect(result).toEqual({ 4: [ 4.2 ], 6: [ 6.1, 6.3 ] })
    });
  })
  describe('propiedades', () => {
    test('should return 23: [{age: 23}], 24: [{age: 24}]', () => {
      const result = groupBy([{age: 23}, {age: 24}], 'age')
      expect(result).toEqual({
        23: [{age: 23}],
        24: [{age: 24}]
        })
    });
    test('should return correct obj', () => {
      const result = groupBy([
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
      ], 'rating');
      expect(result).toEqual({
          8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
          9: [{ title: 'Clean Code', rating: 9 }],
          10: [{ title: 'Aprendiendo Git', rating: 10 }] 
        })
    });
    test('should return { 3: [one, two], 5: [three] }', () => {
      const result = groupBy(['one', 'two', 'three'], 'length')
      expect(result).toEqual({
        3: ['one', 'two'],
        5: ['three']
        })
    });
    test('should return { 1: [2, 3], 3: [123] }', () => {
      const result = groupBy(['2', '3', '123'], 'length')
      expect(result).toEqual({
        1: ['2', '3'],
        3: ['123']
        })
    });
    test('should return ', () => {
      const result = groupBy([
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
      ], 'title');
      expect(result).toEqual({
        'JavaScript: The Good Parts': [{ title: 'JavaScript: The Good Parts', rating: 8 }],
        'Clean Code': [{ title: 'Clean Code', rating: 9 }],
        'Aprendiendo Git': [{ title: 'Aprendiendo Git', rating: 10 }] 
      });
    });
  })
})