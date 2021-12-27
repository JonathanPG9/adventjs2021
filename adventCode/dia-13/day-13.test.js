import wrapGifts from "./day-13";


/* ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...
Vamos a crear una función que pasándole un array de regalos,
nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.
Sólo tienes que tener en cuenta unas cosillas ✌️:
Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud... */

describe('wrapGifts', () => {
  let gift = ["📷", "⚽️"];
  test('should return correct wrap', () => {
    const result = wrapGifts(gift);
    expect(result).toEqual(['****',
    '*📷*',
    '*⚽️*',
    '****'
    ]);
  });
  test('should return correct wrap', () => {
    gift = ["🏈🎸", "🎮🧸"];
    const result = wrapGifts(gift);
    expect(result).toEqual([
    '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
    ]
    );
  });
  test('should return correct wrap', () => {
    gift = ["📷"];
    const result = wrapGifts(gift);
    expect(result).toEqual([
    '****',
    '*📷*',
    '****'
    ]);
  });
  test('should return correct wrap', () => {
    gift = ["📷📷📷📷📷"];
    const result = wrapGifts(gift);
    expect(result).toEqual([
      "******",
      "*📷📷📷📷📷*",
      "******",
    ]);
  });
  test('should return correct wrap', () => {
    gift = [""];
    const result = wrapGifts(gift);
    expect(result).toEqual([
      "****",
      "**",
      "****",
    ]);
  });
  test('should return correct wrap', () => {
    gift = [];
    const result = wrapGifts(gift);
    expect(result).toEqual([
      "****",
      "****"
    ]);
  });
})