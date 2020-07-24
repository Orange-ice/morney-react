import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
    {id:createId(),name:'服饰'},
    {id:createId(),name:'交通'},
    {id:createId(),name:'通讯'},
    {id:createId(),name:'餐饮'},
]
const useTags = ()=>{
    const [tags, setTags] = useState<{ id:number,name:string }[]>(defaultTags);
    return{tags,setTags}
}
export {useTags}

