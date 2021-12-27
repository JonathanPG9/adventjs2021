export default  function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀
  for(let i = 0; i <  game.length; i++) {
    const room = game[i].some(x => x === 'm') ? i : null,
          raton = room >= 0 ? game[room]?.indexOf('m') : null;
    if(direction === 'up' && i === room ) {
      return game[room - 1 ]?.length ? game[room - 1][raton] === '*' : false 
    }
    if(direction === 'down' && i === room ) {
      return game[room + 1]?.length ? game[room + 1][raton] === '*' : false 
    }
    if((direction === 'left' || direction === 'right') && i === room) {
      const arr = game[room];
        for(let j = 0; j < arr.length; j++) {
          if(direction === 'left' && arr[raton - 1] === '*') return true
          if(direction === 'right' && arr[raton + 1] === '*') return true
          return false
      }
    }
  }
}