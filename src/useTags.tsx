import {useState} from 'react';

const useTags = ()=>{
    const [tags, setTags] = useState<string[]>(['服饰', '餐饮', '交通', '通讯']);
    return{tags,setTags}
}
export {useTags}

