export default function groupBy(collection, it) {
  const newObj = {}
  for (let i = 0; i < collection.length; i++) {
    let value = collection[i][it];
    if (collection[0].hasOwnProperty(it)) {
      if (newObj.hasOwnProperty(value)) {
        newObj[value].push(collection[i])
      } else {
        newObj[value] = [collection[i]]
      }
    } else {
      value = it(collection[i])
      if (newObj.hasOwnProperty(value)) {
        newObj[value].push(collection[i])
      } else {
        Object.defineProperty(newObj, value, {
          value: [collection[i]],
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
  }
  return newObj
}