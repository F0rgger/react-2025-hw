import {FC} from 'react';
import './Pagination.css';  // Стили для пагинации

interface PaginationProps {
    currentPage: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination:FC<PaginationProps> = ({ currentPage, onNext, onPrev }) => {
    return (
        <div>
            <button onClick={onPrev} disabled={currentPage === 1}>
                Назад
            </button>
            <span>{currentPage}</span>
            <button onClick={onNext} >
                Вперед
            </button>
        </div>
    );
};

export default Pagination;
