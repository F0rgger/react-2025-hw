import {FC, useEffect, useState} from 'react';
import TodoComponent from './TodoComponent';
import {ITodo} from "../models/ITodo.ts";
import {fetchTodos} from "../services/apiService.tsx";


const TodoComponents: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos().then(todos => setTodos(todos));
    }, []);

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoComponent key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoComponents;