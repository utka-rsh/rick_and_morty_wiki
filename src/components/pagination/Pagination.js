// import React, {useState, useEffect} from 'react';?
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';


const Pagination = ({info,setPageNumber,pageNumber}) => {

  let [width,setWidth]= useState(window.innerWidth);

  let updateDimension= ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize",updateDimension);
    return   ()=>  window.removeEventListener("resize",updateDimension)

  })

    let pageChange = (data) => {
        setPageNumber(data.selected + 1);

      };

 return(
  <>
  <style jsx>
{`
  @media (max-width:768){
.next , .prev{
  display:none;
}
  }`
}  </style>

  <ReactPaginate
   className='pagination justify-content-center gap-4 my-4' 
  nextLabel	="Next"
  forcePage	={pageNumber===1? 0 : pageNumber-1}
  previousLabel	="Prev"
  previousClassName	="btn btn-outline-primary prev"
  nextClassName	="btn btn-outline-primary next"
  activeClassName="active"
  pageCount={info?.pages}
  breakLabel= "..."
  onPageChange ={pageChange}
  pageClassName="page-item"
  pageLinkClassName="page-link"
 />
 </>
 )
  
}

export default Pagination