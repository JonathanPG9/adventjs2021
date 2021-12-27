export default function missingReindeer(ids) {
  const idSort = ids.sort((a,b) => a - b)
  for(let i = 0 ; i <= idSort.length ; i++) {
    if(idSort.every(x => x !== i)) {
      return i
    }
  }
}