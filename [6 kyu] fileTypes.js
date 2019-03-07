function solve(files) {
  const fileExtensions = files.map(file => file.match(/\.[0-9a-z]+$/i)[0]);
  const freq = fileExtensions.reduce((total, ext) => {
    total[ext] ? total[ext]++ : (total[ext] = 1);
    return total;
  }, {});
  const mostOccurNum = Math.max(...Object.values(freq));
  if (!Number.isFinite(mostOccurNum)) return [];

  const mostOccurExtensions = Object.entries(freq)
    .filter(([ext, occur]) => occur === mostOccurNum)
    .sort()
    .map(([ext, occur]) => ext);

  return mostOccurExtensions;
}
