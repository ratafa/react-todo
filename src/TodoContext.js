import React, {createContext, useContext, useReducer, useRef} from "react";

const initialTodos = [
    {
        id:1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id:2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id:3,
        text: 'Context 만들기',
        done: true
    },
    {
        id:4,
        text: '기능 구현하기',
        done: false
    },
]

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
            // return state = [...state, action.todo];
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
            // map틀 통해 삼항연산자가 참이라면 배열 속에서 한 객체(todo)마다
            // 기존 객체 값(...todo)을 가져오고 done 값 접근하여 !done으로 값을 변경합니다.
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider valu={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
export const useTodoNextId = () => {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

