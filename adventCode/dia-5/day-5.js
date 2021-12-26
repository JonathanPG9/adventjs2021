export default function daysToXmas(date) {
  let result = 25,
      contador = 5;
  const [month, day] = [date.getMonth(), date.getDate()];
  if(month + 1 === 12) return result - day
  for(let i = 0; i <= day ; i++){
    contador++
  }
return contador * -1
}