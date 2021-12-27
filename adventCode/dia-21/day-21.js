export default function canCarry(capacity, trip) {
  let result = 0;
  for(let i = 0; i < trip.length; i++) {
    result += trip[i][0];
    if(i > 0 && trip[i][1] >= trip[i - 1][2]) {
      result -= trip[i - 1][0]
    };
    if(result > capacity) return false
  }
  return result >= 0
}