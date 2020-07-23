import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';







const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
    return (
        <MyLayout>
            <TagsSection>
                <ol>
                    <li>服饰</li>
                    <li>餐饮</li>
                    <li>交通</li>
                    <li>通讯</li>
                </ol>
                <button>添加标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="点我添加备注噢"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">收入</li>
                    <li>支出</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    );
}

export default Money;