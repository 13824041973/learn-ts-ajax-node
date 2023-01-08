import axios from "axios";
import e from "express";

const Get = (url:string) => {
    return (target:any,key:any,descriptor:PropertyDescriptor) => {
        const fnc = descriptor.value;
        axios.get(url).then(res => {
            fnc(res,{
                status:200
            })
        }).catch(e => {
            fnc(e,{
                status:500
            })
        })
    }
}

class Controller {
    constructor () {

    }
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList (res:any,status:any) {
        console.log(res);
        console.log(status);
        
    }
}