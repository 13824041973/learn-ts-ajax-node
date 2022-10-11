// keyof 约束泛型对象
// function props<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// let o = { a: 1, b: 2 };

// console.log(props(o, "a"));
// console.log(props(o,"b"));
// console.log(props(123,"toString"));

// --------------------------------------------------------------
class Sub<T> {
  attr: T[] = [];
  add(a: T): T[] {
    return [a];
  }
}

let s = new Sub<number>();
console.log((s.attr = [1]), s.add(2));

let str = new Sub<string>();
console.log(str.attr = ['1'],str.add('123'));