import shouldBuyFidelity from "./day-11";

/* Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.
Mi cine favorito tiene dos posibilidades:
• Entrada de un sólo uso: Cuesta 12$ por cada película.
• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket.
¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
*/

describe('shouldBuyFidelity', () => {
  describe('truthy cases', () => {
    test('should return true', () => {
      const result = shouldBuyFidelity(44)
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = shouldBuyFidelity(34)
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = shouldBuyFidelity(233)
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = shouldBuyFidelity(323)
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = shouldBuyFidelity(99)
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = shouldBuyFidelity(110)
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      const result = shouldBuyFidelity(24)
      expect(result).toBeTruthy()
    });
  })
  describe('falsy cases', () => {
    test('should return false', () => {
      const result = shouldBuyFidelity(23)
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      const result = shouldBuyFidelity(2)
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      const result = shouldBuyFidelity(4)
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      const result = shouldBuyFidelity(19)
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      const result = shouldBuyFidelity(5)
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      const result = shouldBuyFidelity(22)
      expect(result).toBeFalsy()
    });
  })
})