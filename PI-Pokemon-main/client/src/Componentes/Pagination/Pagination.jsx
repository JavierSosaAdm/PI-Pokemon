import React from 'react';
import style from './pagination.module.css';

const Pagination = ({ goToPrevPage, goToNextPage, goToPage, currentPage, lastPage }) => {
    const buttons = [];
     
    for (let i = 0; i < lastPage; i++) {
        buttons.push(<button key={i} onClick={() => goToPage(i)}>{i + 1}</button>)
    };

    return (
        <div>
            <button className={style.paginationButton} onClick={goToPrevPage} disabled={currentPage === 0}>Before</button>
            {buttons}
            <button className={style.paginationButton} onClick={goToNextPage} disabled={currentPage === lastPage -1}>Next</button>
        </div>
    );
};

export default Pagination;