export default function getMinJump(obstacles) {
  const posibilidades = [...obstacles,...[1,2,3,4,5,6,7,8,9,10]]
  .filter((x,i,all) => i === all.indexOf(x))
  .splice(obstacles.length);
  for(let i = 0 ; i < obstacles.length; i++) {
    if(obstacles.every(x => x % posibilidades[i] !== 0)) {
      return posibilidades[i]
    }
  }
}