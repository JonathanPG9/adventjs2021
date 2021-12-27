import checkSledJump from "./day-15";

/* ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!
Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles.
Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...
Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... 
y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. 
También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones. */

describe('checkSledJump', () => {
  let heights;
  beforeEach(() => {
    heights = [1, 2, 3, 2, 1];
  })
  describe('truthy cases', () => {
    test('should return true', () => {
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [0, 1, 0];
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [0, 5, 1]
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [0, 1,3,2,1]
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [1,10000,2]
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [0, 4,10,4, 0]
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [1,5,20,3,2]
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
    test('should return true', () => {
      heights = [1,5,22,3,2]
      const result = checkSledJump(heights);
      expect(result).toBeTruthy()
    });
  })
  describe('falsy cases', () => {
    test('should return false', () => {
      heights = [0,1,40,3,50]
      const result = checkSledJump(heights);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      heights = [0,32,44,45]
      const result = checkSledJump(heights);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      heights = [3,3,3,3,3]
      const result = checkSledJump(heights);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      heights = [100,100,1002]
      const result = checkSledJump(heights);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      heights = [1]
      const result = checkSledJump(heights);
      expect(result).toBeFalsy()
    });
    test('should return false', () => {
      heights = [1, 2, 3, 2, 1, 2, 3]
      const result = checkSledJump(heights);
      expect(result).toBeFalsy()
    });
  })
})