export default function isValid(letter) {
  const result = letter.split(" ");
  for(let i = 0; i < result.length; i++) {
    const firstLetter = result[i][0];
    const lastLetter = result[i][result[i].length - 1] 
    if(result[i].includes("()")) return false
    if( firstLetter  === "(" && lastLetter === ")" ) {
      return true
    }
  }
  return false
}