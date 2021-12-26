export default function getCoins(change) {
  const arr = [0, 0, 0, 0, 0, 0],
        coins = [1, 2, 5, 10, 20, 50];
  let input = change;
  let index = 5;
  while (index >= 0) {
    const coin = coins[index],
          result = Math.floor(input / coin);
    if (result) {
      arr[index] = result
      input = input - (coin * result)
    }
    index--
  }
  return arr
}