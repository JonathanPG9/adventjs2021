import daysToXmas from './day-5'
/* 
Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
*/
describe('daysToXmas', () => {
  let date = new Date('Dec 20, 2021')

  test('should return 5', () => {
    const result = daysToXmas(date)
    expect(result).toBe(5)
  });
  test('should return 20', () => {
    date = new Date("Dec 5, 2021")
    const result = daysToXmas(date)
    expect(result).toBe(20)
  });
  test('should return -7', () => {
    date = new Date("Jan 1, 2022")
    const result = daysToXmas(date)
    expect(result).toBe(-7)
  });
  test('should return -20', () => {
    date = new Date("Jan 14, 2022")
    const result = daysToXmas(date)
    expect(result).toBe(-20)
  });
  test('should return 0', () => {
    date = new Date("Dec 25, 2021")
    const result = daysToXmas(date)
    expect(result).toBe(0)
  });
});