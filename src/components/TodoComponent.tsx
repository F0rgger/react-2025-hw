import{FC} from 'react';
import {ITodo} from "../models/ITodo.ts";

interface TodoComponentProps {
    todo: ITodo;
}

const TodoComponent:FC<TodoComponentProps> = ({ todo }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h3>{todo.title}</h3>
            <p>User ID: {todo.id}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
    );
};

export default TodoComponent;