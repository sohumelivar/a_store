import cls from './Pagination.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={classNames(cls.pagination)}>
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {pageNumbers.map((number) => (
                <button 
                    key={number} 
                    onClick={() => onPageChange(number)}
                    className={number === currentPage ? classNames(cls.active) : ''}
                >
                    {number}
                </button>
            ))}
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};
