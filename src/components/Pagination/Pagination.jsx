import React, { Component } from 'react';

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const numPages = [];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        numPages.push(i);
    }
    return ( 
        <ul className="pagination mb-4">
            {numPages.map( num => (
               <li className="page-item" key={num}>
                   <a onClick={()=> paginate(num)} href="!#" className="page-link">
                       {num}
                   </a>
               </li>
            ))}
        </ul>
     );
}
 
export default Pagination;