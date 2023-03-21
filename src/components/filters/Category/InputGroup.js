import React from 'react'

const InputGroup = ({total , name,  setId}) => {

  return (
    <div>
        <div class="input-group mb-3">
  {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
  <select onChange={e=>setId(e.target.value)} class="form-select" id={name}>
    <option selected value={1}>Choose {name}</option>
    {[...Array(total).keys()].map(x=>{
        return(
            <option value={x+1}>{name}- {x+1}</option>

        )
    })}
    
  </select>
</div>
    </div>
  )
}

export default InputGroup