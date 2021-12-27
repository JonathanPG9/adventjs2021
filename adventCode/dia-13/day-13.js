export default function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  const result = []
  const conteoGifts = gifts[0]?.split("");
   const base = conteoGifts?.length > 3 ? "*".repeat(6) : gifts?.length > 2 ?  "".repeat(gifts?.length * gifts?.length) : "*".repeat(4);
    result.push(base)
  for( let i = 0; i < gifts?.length; i++) {
    result.push("*" + gifts[i] + "*" )
  }
  result.push(base)
  return result
}