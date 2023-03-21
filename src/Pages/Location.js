import React, {useState , useEffect} from 'react'
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/Category/InputGroup';

const Location = () => {

    let[id,setId]=useState(1);

    let [info,setInfo]=useState([]);
    // console.log(info);

    let [results,setResult]=useState([]);

    let{name,type,dimension}=info;

let api= `https://rickandmortyapi.com/api/location/${id}`;


useEffect(()=>{

    (async function(){
        let data=await fetch(api).then(res=>res.json());
        setInfo(data);

        let a = await Promise.all(
            data.residents.map((x)=>{
                return fetch(x).then(res=>res.json());
            })
        )
setResult(a)
    })()

},[api])



return(
    <div className="container">

<div className="row mb-4">

        <h2 className='text-center mb-4 fs-bold'>Location : <span className='text-primary'>{name===""? "unknown" : name}</span></h2>
        <h4 className='text-center'>Dimension : {dimension===""? "unknown" : dimension}</h4>
       <h5 className='text-center'>Type : {type===""? "unknown" : type}</h5>
      

       
    </div>

    <div className="row ">
        <div className="col-lg-3 col-12">
            <h4 className="text-center mb-3">Pick location</h4>
            <InputGroup
            setId={setId} 
            name="Location"
             total={126}/>
           </div>
        <div className="col-lg-8 col-12">
            <div className="row">
                <Cards page="/Location/" results={results}/>
                </div>
        </div>
    </div>





    </div>
   
)
}

export default Location