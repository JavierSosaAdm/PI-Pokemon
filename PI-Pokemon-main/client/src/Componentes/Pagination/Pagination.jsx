import React from 'react';
// import style from './pagination.module.css';

const Pagination = ({ goToPrevPage, goToNextPage, goToPage, currentPage, lastPage }) => {
    const buttons = [];
     
    for (let i = 0; i < lastPage; i++) {
        buttons.push(<button key={i} onClick={() => goToPage(i)}>{i + 1}</button>)
    };

    return (
        <div>
            <button onClick={goToPrevPage} disabled={currentPage === 0}>Before</button>
            {buttons}
            <button onClick={goToNextPage} disabled={currentPage === lastPage -1}>Next</button>
        </div>
    );
};

export default Pagination;