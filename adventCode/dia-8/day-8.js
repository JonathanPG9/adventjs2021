export default function maxProfit(prices) {
  const mitadIzquierda = prices.slice(0,prices.length / 2 + 1),
        menorPrecio = Math.min(...mitadIzquierda);
        prices.splice(0,prices.indexOf(menorPrecio));
  return Math.max(...prices) <= menorPrecio ? -1 : Math.max(...prices) - menorPrecio 
}