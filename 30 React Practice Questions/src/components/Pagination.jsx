import React, { useState } from "react";

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumber = [];
  for (let i = 1;i < items.length/itemsPerPage;i++){
   pageNumber.push(i)
  }
  return (
    <div>
        <ul>
            {currentItems.map((item,index)=> {
                return <li key = {index}>{item}</li>
            })}
        </ul>
        {pageNumber.map((number)=>(
            <li key={number} onClick={()=> setCurrentPage(number)}>
                {number}
            </li>
        ))}
    </div>
  )
  ;
};

export default Pagination;
