export default function decodeNumber(symbols) {
  const nObj = {
      ".": 1,
      ",": 5,
      ":": 10,
      ";": 50,
      "!": 100
    },
    arr = symbols.split("").map(x => nObj[x]);
  let index = 0,
    result = 0;
  while (symbols.length > index) {
    const first = arr[index],
      second = arr[index + 1] || 0;
    first >= second ? result += first : result -= first
    index++
  }
  return result
}