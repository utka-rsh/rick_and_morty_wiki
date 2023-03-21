import React, {useEffect, useState} from 'react'
import { Params, useParams } from 'react-router-dom'

const CardDetail = () => {

    let{id}=useParams();


let [fetchedData,updateData]= useState([]);
console.log(fetchedData)
let {name,image,gender,location,origin,species,status,type}=fetchedData;


    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=>{
        (async function(){
          let data = await fetch(api).then((res)=>res.json());
          updateData(data);
        })();
      },[api]);
  return (
    <div className='container d-flex justify-content-center'>
        <div className="d-flex flex-column text-center">
        <h3>{name}</h3>
        <img src={image} alt="" className='img-fluid mb-2' />
        {
               ( ()=>{
                    if(status==="Dead"){
                        return(
                            <div className="badge bg-danger fs-5">{status}</div>
                        )
                    }
                    else if(status==="Alive"){
                        return(
                            <div className="badge bg-success fs-5">{status}</div>
                        )
                    }
                    else{
                        return(
                            <div className="badge bg-secondary fs-5">{status}</div>
                        );
                    }
                })()
            }
            <div className="content ">
                <div className="">
                    <span className="fw-bold">Gender : </span>
                    {gender}
                </div>

                <div className="">
                    <span className="fw-bold">Location : </span>
                    {location?.name}
                </div>

                <div className="">
                    <span className="fw-bold">Species : </span>
                    {species}
                </div>

                <div className="">
                    <span className="fw-bold">Origin : </span>
                    {origin?.name}
                </div>

                <div className="">
                    <span className="fw-bold">Type : </span>
                    {type===""? "unknown" : type}
                </div>
            </div>
            
        </div>
        

       

        
    </div>
  )
}

export default CardDetail