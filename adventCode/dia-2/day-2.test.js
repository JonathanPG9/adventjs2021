import listGifts from './day-2'
/* Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. 
¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation,
que significa que está tachado y no se tiene que contar.
Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto: */
describe('listGifts', () => {
  let carta;
  beforeEach(() => {
    carta = 'bici coche balon _playstation bici coche peluche'
  });
  describe('truthy cases', () => {
    test('should return a correct dict', () => {
      const result = listGifts(carta);
      expect(result).toEqual({ bici: 2, coche: 2, balon: 1, peluche: 1 })
    });
    test('should return a correct dict', () => {
      carta += " balon coche _azucar televisor perro"
      const result = listGifts(carta);
      expect(result).toEqual({ bici: 2, coche: 3, balon: 2, peluche: 1, televisor: 1, perro:1 })
    });
  });
  describe('falsy cases', () => {
    test('should return empty object', () => {
      carta = ""
      const result = listGifts(carta);
      expect(result).toEqual({})
    });
  })
});
