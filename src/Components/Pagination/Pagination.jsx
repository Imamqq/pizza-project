import React from 'react'
import s from "./Pagination.module.scss"
import ReactPaginate from 'react-paginate';


function Pagination({ currenPage, onChagePage }) {

    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChagePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currenPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination