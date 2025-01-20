import  {FC} from 'react';
import { useUsers } from '../hooks/useUsers';
import './UsersPage.css';
import Pagination from "../pagination/Pagination.tsx";

const UsersPage: FC = () => {
    const { users, page, handleNextPage, handlePrevPage } = useUsers();

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.firstName} {user.lastName}</h3>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={page}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
            />
        </div>
    );
};

export default UsersPage;
