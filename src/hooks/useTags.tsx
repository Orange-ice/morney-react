import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

const useTags = () => { // 封装一个自定义 Hook
    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: '服饰'},
                {id: createId(), name: '交通'},
                {id: createId(), name: '通讯'},
                {id: createId(), name: '餐饮'},
            ];
        }
        setTags(localTags);
    }, []); // 组件挂载时执行
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
        // const index = findTagIndex(id);
        // 深拷贝 tags 得到 tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // 把 tagsClone 的第 index 个删掉 ，替换成 {id:id,name:obj.name}
        // tagsClone.splice(index, 1, {id: id, name: obj.name});
        // setTags(tagsClone);
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
        const tagName = window.prompt('请输入标签名');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };
    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
};
export {useTags};

