import {FC, useEffect, useState} from 'react';
import TodoComponent from './TodoComponent';
import {ITodo} from "../models/ITodo.ts";


const TodoComponents: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(import.meta.env.VITE_API_URL);
            const data = await response.json();
            setTodos(data.todos);
        };

        fetchTodos();
    }, []);

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoComponent key={todo.id} todo={todo}/>
            ))}
        </div>
    );
};

export default TodoComponents;