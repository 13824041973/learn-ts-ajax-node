let sym = Symbol();
let sym2 = Symbol();
// console.log(sym === sym2);
let obj = {
  [sym]: "value",
  [sym2]: "val2",
  sex: "男",
};
// console.log(obj[sym]);
/**for in 是遍历不到symbol的 */
for (const key in obj) {
  console.log(key);
}
console.log(Object.keys(obj));//遍历不到symbol
console.log(Object.getOwnPropertyNames(obj));//遍历不到symbol
console.log(JSON.stringify(obj));//遍历不到symbol
console.log(obj);

// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
console.log(Object.getOwnPropertySymbols(obj));

// 2 es6 的 Reflect 拿到对象的所有属性
console.log(Reflect.ownKeys(obj));
