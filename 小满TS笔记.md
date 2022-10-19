## 任意属性 [propName: string]

###### 需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：

```
//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
interface Person {
    b?:string,
    a:string,
    [propName: string]: any;
}
 
const person:Person  = {
    a:"213",
    c:"123"
```



## 只读属性 readonly

## 添加函数

```
//这样写是会报错的
//应为a是只读的不允许重新赋值
interface Person {
    b?: string,
    readonly a: string,
    [propName: string]: any;
    cb():void
}
 
const person: Person = {
    a: "213",
    c: "123"
    cb:()=>{
        console.log(123)
    }
}
 
person.a = 123
```

