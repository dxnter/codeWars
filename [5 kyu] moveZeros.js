/*
Move Zeros To The End
*/

const moveZeros = arr => [...arr.filter(element => element !== 0), ...arr.filter(element => element === 0)];