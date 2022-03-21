// this is the function that converts rgb value to hex

// how to convert  rgb value into hex
// pasing rgb value n function returning hex value
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;

//  for getting  colors we will use external library
//  mention in .readme file : values.js
