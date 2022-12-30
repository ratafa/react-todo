import React, {useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
  padding: 20px 32px 32px 48px;
  overflow-y: auto;
`;

const TodoList = () => {
    return (
        <TodoListBlock>
            <TodoItem done={true} text='안녕하세요'></TodoItem>
            <TodoItem done={false} text='안녕하세요'></TodoItem>
            <TodoItem done={false} text='안녕하세요'></TodoItem>
        </TodoListBlock>
    );
}

export default TodoList;
