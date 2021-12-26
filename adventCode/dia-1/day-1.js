export default function contarOvejas(ovejas) {
  return ovejas.filter(x => x.name.toLowerCase().includes("n") &&
  x.name.toLowerCase().includes("a")
  && x.color === "rojo") 
}