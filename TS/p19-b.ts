import {A} from "./p19-a"
namespace B {
    export const b = 2
    export namespace C {
        export const d = 4
    }
}
// console.log(A,B);
// console.log(B.b);
console.log(B);
console.log(B.C.d);
import AAA = B.C
console.log(AAA.d);
