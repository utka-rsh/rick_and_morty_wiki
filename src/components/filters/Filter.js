import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filter = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear=()=>{
    setStatus("") ;
    setPageNumber(1); 
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>
      <div onClick={clear} style={{cursor:"pointer"}} className="text-center text-decoration-underline text-primary mb-4 ">Clear Filters</div>

      <div className="accordion " id="accordionExample">
      <Status 
      setPageNumber={setPageNumber}
       setStatus={setStatus}/>
      <Species setSpecies={setSpecies}
      setPageNumber={setPageNumber}/>
      <Gender setGender={setGender}
      setPageNumber={setPageNumber}/>
  
 
</div>
    </div>
  )
}

export default Filter