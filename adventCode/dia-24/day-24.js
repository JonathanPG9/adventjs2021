export default function checkIsSameTree(treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
  function countDecorations(bigTree) {
    let total = bigTree.value;
    const left = bigTree.left ? countDecorations(bigTree.left) : 0;
    const right = bigTree.right ? countDecorations(bigTree.right) : 0;
    return total += left + right
  }
  const value = countDecorations(treeA)
  const sValue = countDecorations(treeB)
  return sValue === value
}