// let arr:Array<number> = [4,5,6]
// let it:Iterator<number> = arr[Symbol.iterator]()

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// -----------------------------------------------------------------------------

let arr: Array<number> = [4, 5, 6];
let set: Set<number> = new Set([1, 2, 3]);

type mapKeys = string | number;
let map: Map<mapKeys, mapKeys> = new Map();
map.set("1", "王爷");
map.set(2, "我是2");

let obj = { name:1} //对象不可以，它的prototype里没有 Symbol(Symbol.iterator) 这个属性

function gen(erg: any) {
  let it: Iterator<any> = erg[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = it.next();
    if (!next.done) {
      console.log(next);
    }
  }
}
// gen(arr);
// gen(set);
// gen(map);

console.log(map);

for (let item of map) {
    console.log(item);
}

export {}