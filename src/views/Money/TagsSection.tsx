import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
    margin: 0 -12px;
    >li{
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background:#f60;
      }
    }
  }
  >button{
    background:none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;


const TagsSection: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['服饰', '餐饮', '交通', '通讯']);
    const [selectedTag, setSelectedTag] = useState<string[]>([]);
    const onAddTag = () => {
        const tagName = window.prompt('请输入标签名');
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTags = (tag: string) => {
        const index = selectedTag.indexOf(tag);
        if (index >= 0) {
            setSelectedTag([]);
        } else {
            setSelectedTag([tag]);
        }
    };
    const getClass = (tag: string) => selectedTag.indexOf(tag) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => {onToggleTags(tag);}} className={getClass(tag)}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>添加标签</button>
        </Wrapper>
    );
};
export {TagsSection};