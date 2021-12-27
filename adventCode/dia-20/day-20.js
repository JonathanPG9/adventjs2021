export default function pangram(letter) {
  const push = letter.includes("ñ"),
        clean = letter
  .toLowerCase()
  .split("")
  .filter((x,i,all) => {
  return i === all.indexOf(x) && /^[a-zA-Z]*$/.test(x)
  });
  push ? clean.push("ñ") : null
  // ¡No olvides compartir tu solución en redes!
  return clean.length === 27
}