import React, {useState , useEffect} from 'react'
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/Category/InputGroup';

const Episode = () => {

    let[id,setId]=useState(1);

    let [info,setInfo]=useState([]);
    // console.log(info);

    let [results,setResult]=useState([]);

    let{name,air_date}=info;

let api= `https://rickandmortyapi.com/api/episode/${id}`;


useEffect(()=>{

    (async function(){
        let data=await fetch(api).then(res=>res.json());
        setInfo(data);

        let a = await Promise.all(
            data.characters.map((x)=>{
                return fetch(x).then(res=>res.json());
            })
        )
setResult(a)
    })()

},[api])



return(
    <div className="container">

<div className="row mb-4">

        <h2 className='text-center mb-4 fs-bold'>Episode name : <span className='text-primary'>{name===""? "unknown" : name}</span></h2>
       <h5 className='text-center'>Air date : {air_date===""? "unknown" : air_date}</h5>
       
    </div>

    <div className="row ">
        <div className="col-lg-3 col-12">
            <h4 className="text-center mb-3">Pick episode</h4>
            <InputGroup
            setId={setId} 
            name="Episode"
             total={51}/>
           </div>
        <div className="col-lg-8 col-12">
            <div className="row">
                <Cards page="/Episode/" results={results}/>
                </div>
        </div>
    </div>





    </div>
   
)
}

export default Episode