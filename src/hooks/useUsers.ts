import { useState, useEffect } from 'react';
import {IUser} from "../model/IUser.ts";
import {getUsers} from "../services/service.ts";

export const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers(page.toString());
            setUsers(usersData);
        };
        fetchUsers();
    }, [page]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage(prevPage => prevPage - 1);
    };

    return { users, page, handleNextPage, handlePrevPage };
};