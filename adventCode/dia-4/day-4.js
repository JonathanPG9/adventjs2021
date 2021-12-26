export default function createXmasTree(height) {
  let result = ""
  for(let i = 1; i <= height ; i++) {
    const spaces = "_".repeat(height - i)
    result += spaces + "*".repeat(i * 2 - 1) +   spaces + "\n"
    if(i === height) result += ("_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n" ).repeat(2)
  }
  return result.trim();
}