const doc: ClassDecorator = (target: any) => {
  //   console.log(target);
  target.prototype._name = "阿龙";
};

const Property: PropertyDecorator = (target: any, key: string | symbol) => {
//   console.log(target);
//   console.log(key);
};

const Meth:MethodDecorator = (target: any, key: string | symbol,descriptor:any)=>{
    // console.log(target);
    // console.log(key);
    // console.log(descriptor);
}

const Param:ParameterDecorator = (target: any, key: string | symbol,index:any)=>{
    console.log(target);
    console.log(key);
    console.log(index);
}


@doc
class Xiaolong {
  @Property
  public name: string;
  constructor() {
    this.name = "aa龙";
  }
  @Meth
  getName(name:string,@Param age:number){

  }
}

const xiaolong: any = new Xiaolong();
// console.log(xiaolong.name);
