export default function countPackages(carriers, carrierID) {
  let result = 0;
  for (let i = 0; i < carriers.length; i++) {
    const id = carriers[i][0] === carrierID ? carriers[i] : null
    if (id?.length) {
      result += id[1];
      for (let j = 0; j < id[2].length; j++) {
        result += countPackages(carriers.slice(i), id[2][j]);
      }
    }
  }
  return result;
}
