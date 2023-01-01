import React from "react";
import styled, {css} from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md';
import {useTodoDispatch} from "../TodoContext";

const RemoveItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${RemoveItem} {
      // 여기서 사용된 기능은 Component Selector 라는 기능입니다. 
      // 이 스타일은 TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여주라는 의미를 가지고 있습니다.
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;


const TodoText = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${({done}) =>
    done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItem = ({id, done, text}) => {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <TodoText done={done}>{text}</TodoText>
            <RemoveItem onClick={onRemove}>
                <MdDelete />
            </RemoveItem>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);
