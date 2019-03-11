function meeting(s) {
  return s
    .split(';')
    .map(fullname =>
      fullname
        .toUpperCase()
        .split(':')
        .reverse()
    )
    .sort()
    .map(([last, first]) => `(${last}, ${first})`)
    .join('');
}
