export default function countDecorations(bigTree) {
  // ¡No olvides compartir tu solución en redes!
/*   const arr = JSON.stringify(bigTree).replaceAll(/{|null|}|,|left|value|right|"/g, "").split(":").filter(x => x)
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    result += Number(arr[i])
  }
  return result */
  let total = bigTree.value;
  const left = bigTree.left ? countDecorations(bigTree.left) : 0;
  const right = bigTree.right ? countDecorations(bigTree.right) : 0;
  return total += left + right
}