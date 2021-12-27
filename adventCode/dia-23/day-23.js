export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  //  for(let i = 0; i < from.length; i++){
  //  const strFrm = from[i],
  //        nxtStrFrm = from[i + 1] || 0,
  //        strTo = to[i],
  //        nxtStrTo = to[i + 1] || 0;
  //  if(strTo === nxtStrTo) return false;
  //  if(strFrm === nxtStrFrm ) return false;
  // }
  // return true
  const mapFrom = new Map(),
        mapTo = new Map()
  for (let i=0; i < from.length; i++) {
    const letterTo = to[i],
          letterFrom = from[i];
    if (mapTo.has(letterTo) && letterFrom !== mapTo.get(letterTo)) return false
    if (mapFrom.has(letterFrom) && mapFrom.get(letterFrom) !== letterTo) return false
    mapFrom.set(letterFrom, letterTo);
    mapTo.set(letterTo,letterFrom)
  }
  return true;
}