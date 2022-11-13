function add<T>(a: T, b: T): Array<T> {
  return [a, b];
}

console.log(add<number>(1, 2));
console.log(add<string>("1", "2"));

function sub<T, U>(a: T, b: U): Array<T | U> {
  return [a, b];
}

console.log(sub(1, true));

// 泛型约束
interface Len {
  length: number;
}
function getLength<T extends Len>(arg: T): number {
  return arg.length;
}
console.log(getLength([1, 23]));
