export default function maxProfit(prices) {
  const mitadIzquierda = prices.slice(0,prices.length / 2 + 1);
  let menorPrecio = Math.min(...mitadIzquierda);
  const arr = prices.slice(prices.indexOf(menorPrecio),Math.max(...prices))
  for(let i = 0; i < arr.length; i++) {
    if(menorPrecio > arr[i] && i != arr.length - 1) {
      menorPrecio = arr[i]
    }
  }
  prices.splice(0,prices.indexOf(menorPrecio));
  return Math.max(...prices) <= menorPrecio ? -1 : Math.max(...prices) - menorPrecio 
}