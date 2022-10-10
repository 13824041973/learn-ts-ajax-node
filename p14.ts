let sym = Symbol();
let sym2 = Symbol();
console.log(sym === sym2);
let obj = {
  [sym]: "value",
};
console.log(obj[sym]);
