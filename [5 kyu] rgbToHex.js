/*
RGB To Hex Conversion
===
The rgb() method is incomplete.
Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
The valid decimal values for RGB are 0 - 255.
Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
*/

const rgb = (r, g, b) => `${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase();

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
