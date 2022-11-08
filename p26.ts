{
  interface Event {
    on: (name: string, fn: Function) => void;
    emit: (name: string, ...args: Array<any>) => void;
    off: () => void;
    once: () => void;
  }
  interface List {
    [key: string]: Array<Function>;
  }

  class Dispatch implements Event {
    list: List;
    constructor() {
      this.list = {};
    }
    on(name: string, fn: Function) {
      const callback = this.list[name] || [];
      callback.push(fn);
      this.list[name] = callback;
    //   console.log(this.list);
    }
    emit(name: string, ...args: Array<any>) {
      let eventName = this.list[name];
      if (eventName) {
        eventName.forEach((fn) => {
          fn.apply(this, args);
        });
      } else {
        console.error("名称错误：" + name);
      }
    }
    off() {}
    once() {}
  }

  const o = new Dispatch();

  o.on("post1", (...args:Array<any>) => {
    console.log(args);
  });
  o.on("post2", (...args:Array<any>) => {
    console.log(args);
  });

  o.emit("post1", 1, false, { name: "阿龙" });
}
