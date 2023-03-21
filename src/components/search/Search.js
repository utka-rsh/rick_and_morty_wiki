import React from 'react'
import styles from "./Search.module.scss"

const Search = ({setSearch}) => {

    function handleChange(e){
        setSearch(e.target.value);
    }

  return (
    <form  className=" d-flex flex-sm-row flex-column align-items-center justify-content-center gap-5 my-4">
        <input 
        onChange={handleChange}
         placeholder='Search for characters'  type="text" className={`${styles.input} input`} />
        <button onClick={(e)=>e.preventDefault()} className={`${styles.btn} btn btn-primary fs-5` }>Search</button>
    </form>
  )
}

export default Search