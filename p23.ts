// const watcher = (name: string): ClassDecorator => {
//   return (target: Function) => {
//     target.prototype.getName = () => {
//       return name;
//     };
//   };
// };
// const doubleWatcher: ClassDecorator = (target: Function) => {
//   target.prototype.a = "a";
// };
// @doubleWatcher
// @watcher("阿龙")
// class A {}
// let a = new A();

// @watcher
// class B {}
// let b = new B()

// console.log((<any>a).getName());
// console.log((<any>a).a);

//////////////////////////////////////////////////////////////
const log: ParameterDecorator = (...args) => {
  console.log(args);
};

class A {
  name: string = "我是name";
  constructor() {}
  getName(name: string, @log sex: string) {
    return name;
  }
}
let a = new A();
