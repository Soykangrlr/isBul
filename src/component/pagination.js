import React, { useEffect, useState } from 'react'

function Pagination(props) {
    const {info,onClick,currentPage}=props
    const totalPages=info?.pages

    const handlePageChange = (page) => {
      
 
        onClick(page)
      };
      const renderPaginationButtons = () => {
        const pageButtons = [];
        const startPage = Math.max(1, currentPage - 3);
        const endPage = Math.min(totalPages, currentPage + 3);
    
        for (let i = startPage; i <= endPage; i++) {
          pageButtons.push(
            <button
              key={i}
              className={currentPage === i ? 'active' : ''}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
    
        return pageButtons;
      };
    return (
        <div className='pagination'>
         {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>{"<"}</button>
        )}
        {renderPaginationButtons()}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>{">"}</button>
        )}
        </div>
    )
}

export default Pagination
