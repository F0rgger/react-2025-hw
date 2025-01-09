import {ITodo} from "../models/ITodo.ts";


const VITE_API_URL = import.meta.env.VITE_API_URL;

export const fetchTodos = async (): Promise<ITodo[]> => {
    return await fetch (VITE_API_URL)
        .then(response => response.json())
        .then(data => data.todos);
};