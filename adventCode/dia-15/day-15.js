export default function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  const arr = heights,
        maxNumber = Math.max(...heights);
  let index = 0,
      contador = 0,
      indexThatIwant = 0;
  while (arr.length > index) {
    indexThatIwant += maxNumber === arr[index] ? index : null
    if (arr[index] === arr[index - 1] || arr[index] === arr[index + 1]) return false
    if (arr[index] === maxNumber) {
      ++contador
      if (contador === 2) return false
    }
    index++
  }
  if (arr[indexThatIwant] > arr[indexThatIwant - 1] && arr[indexThatIwant] > arr[indexThatIwant + 1] && arr.length < 6) return true
  return false
}