export default function listGifts(letter) {
  const result = letter.split(" ").filter(x => x && x[0] !== "_").reduce((a,b) => {
    a[b] ? a[b] += 1 : a[b] = 1
    return a
  },{})
return result
}