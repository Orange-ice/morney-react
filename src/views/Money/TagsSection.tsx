import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from 'hooks/useTags';
import {createId} from '../../lib/createId';

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

type Props = {
    value:number[],
    onChange:(selected:number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags,addTag} = useTags()
    const selectedTagId = props.value

    const onToggleTags = (tagId: number) => {
        const index = selectedTagId.indexOf(tagId);
        if (index >= 0) {
            props.onChange([]);
        } else {
            props.onChange([tagId]);
        }
    };
    const getClass = (tagId: number) => selectedTagId.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => {onToggleTags(tag.id);}} className={getClass(tag.id)}>{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>添加标签</button>
        </Wrapper>
    );
};
export {TagsSection};