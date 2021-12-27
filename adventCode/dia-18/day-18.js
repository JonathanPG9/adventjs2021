export default function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes!
  const resultObj = {},
        result = [];
  for (let i = 0; i < files.length; i++) {
    resultObj[files[i]] ? result.push(`${files[i]}(${resultObj[files[i]]})`) : result.push(files[i])
    resultObj[files[i]] = (resultObj[files[i]] || 0) + 1
  }
  return result
}