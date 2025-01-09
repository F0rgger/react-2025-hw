import {ITodo} from "../models/ITodo.ts";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTodos = async (): Promise<ITodo[]> => {
    return await fetch(API_BASE_URL)
        .then(response => response.json());
};