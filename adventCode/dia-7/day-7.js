export default function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!,
  // const hasProduct = JSON.stringify(store).includes(product)
  const hasProduct = JSON.stringify(store).replace(/"/g, " ").split(" ").includes(product)
  return hasProduct
}