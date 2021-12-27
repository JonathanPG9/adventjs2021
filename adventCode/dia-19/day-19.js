export default function learn(time, courses) {
  // ¡No olvides compartir tu solución en redes!
  let timer = 0;
  const arr = [];
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const suma = courses[i] + courses[j]
      if (suma > time) continue
      if (suma > timer) {
        timer = suma
        arr[0] = [i, j]
        if (suma === time) break
      }
    }
  }
  return arr[0]?.length > 0 ? arr[0] : null
}