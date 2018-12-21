function inArray(array1, array2) {
  const r = new Set([]);
  array2.forEach(string => {
    array1.forEach(subString => {
      if (string.includes(subString)) r.add(subString);
    });
  });
  return Array.from(r).sort();
}
