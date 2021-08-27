import React from "react";
import './ListOfCountries.css';
import { countries } from "../Data/data";

export const ListOfCountries = () => { 
  return ( 
  <div className="countries-container"> 
  <h1 className="title"> LIST OF COUNTRIES</h1>
  
  <div className="row container">

{countries.map((element) => ( 
<div className="col s2 m4 row">
  <div className="card">
    <div className="card-image">
      <img src={element.picture.flag} />
      <span className="card-title">{element.name}</span>
    </div>
    <div className="card-content">
    <img src={element.picture.capital} width="150px" height="120px" />
      <p> {element.capitalCity}</p>
      <p> {element.about}</p>
    </div>
  </div>
   </div>
))}

</div>


   </div>
);
}