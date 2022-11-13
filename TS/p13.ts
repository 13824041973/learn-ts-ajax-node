interface A {
  type: "bar";
}
interface B {
  type: "bbar";
}
interface C {
  type: "ccc";
}
type All = A | B | C;
function handleVal(val: All) {
  switch (val.type) {
    case "bar":
      break;
    case "bbar":
      break;

    default:
      //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
      //   ts检测到新来的C进来了
      const exe: never = val;
      break;
  }
}
