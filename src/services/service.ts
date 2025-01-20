import {IUser} from "../model/IUser.ts";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async (page: string): Promise<IUser[]> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    return await fetch(VITE_API_URL + '/users' + '?skip=' + skip)
        .then(response => response.json())
        .then(data => data.users);
};
