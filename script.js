function chunkString(str, chunkLeng) {
  if (str === null) {
    return [];
  }

  const chunks = [];
  let i = 0;

  while (i < str.length) {
    chunks.push(str.slice(i, i + chunkLength));
    i += chunkLength;
  }

  return chunks;
}


// Do not change the code below
const str = prompt("Enter String.");
const chunkLeng = prompt("Enter Chunk Size.");
alert(stringChop(str, size));