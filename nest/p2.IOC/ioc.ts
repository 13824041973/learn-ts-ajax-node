class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// class B {
//   name: string;
//   constructor() {
//     this.name = new A("ab").name;
//   }
// }

class C {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  mo: any;
  constructor() {
    this.mo = {};
  }

  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  get(key: string) {
    return this.mo[key];
  }
}

const mo = new Container();
mo.provide("a", new A("aaa"));
mo.provide("c", new C("ccc"));

class B {
  a: any;
  c: any;
  constructor(mo: Container) {
    this.a = mo.get("a");
    this.c = mo.get("c");
  }
}
console.log(new B(mo));

// console.log(mo.mo);
