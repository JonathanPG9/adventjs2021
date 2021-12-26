export default  function sumPairs(numbers, result) {
  for(let i = 0; i < numbers.length   ; i++){
    const lastNumber = numbers[numbers.length - i - 1]
    if(numbers[0] + lastNumber === result) {
      return [numbers[0],lastNumber]
  }
  for(let j = 0; j < i ; j++){
    if(numbers[i] + numbers[j] === result) {
      return [numbers[j],numbers[i]]
    }
  } 
}
  return null
}