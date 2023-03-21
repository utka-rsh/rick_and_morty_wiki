import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import React, { useState, useEffect } from 'react'
import Cards from "./components/cards/Cards";
import Filter from "./components/filters/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";


import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Episode from "../src/Pages/Episode";
import Location from "../src/Pages/Location";
import CardDetail from "./components/cards/CardDetail";




function App(){
  return(
    <Router>
      <div className="App">
      <Navbar/>
     </div>

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/:id" element={<CardDetail/>}/>

        <Route  path="/episode" element={<Episode/>}/>
        <Route  path="/episode/:id" element={<CardDetail/>}/>

        <Route  path="/location" element={<Location/>}/>
        <Route  path="/location/:id" element={<CardDetail/>}/>

      </Routes>
    </Router>
  )
}

const Home=()=>{

  let [pageNumber,setPageNumber] = useState(1);

  let [fetchedData,updateData] = useState([]);

  let [search,setSearch] = useState("");

  let [status,setStatus] = useState("");

  let [gender,setGender] = useState("");

  let [species,setSpecies]= useState("");
  
  let {info,results} = fetchedData;

  // console.log(status);
  // console.log(results);

  




  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


  // console.log(results);



  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json());
      updateData(data);
    })();
  },[api]);

  return(
    <div className="App">
  <h2 className="text-center">Characters</h2>
    <Search  setSearch={setSearch}/>
    <div className="container">
      <div className="row">
        
          <Filter 
          setStatus={setStatus} 
          setPageNumber={setPageNumber}
          setGender={setGender}
          setSpecies={setSpecies}
          />
        
        <div className="col-lg-8 col-12">
          <div className="row">
          <Cards page="/" results={results}/>
          </div>
        </div>
      </div>
    
    </div>
    <Pagination
    info={info}
    pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      />

    </div>
  )
}
export default App;