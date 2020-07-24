import {useState} from 'react';

const useTags = ()=>{
    const [tags, setTags] = useState<{ id:number,name:string }[]>([
        {id:1,name:'服饰'},
        {id:2,name:'交通'},
        {id:3,name:'通讯'},
        {id:4,name:'餐饮'},
    ]);
    return{tags,setTags}
}
export {useTags}

