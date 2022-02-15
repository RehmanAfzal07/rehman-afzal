import { IconButton } from '@material-ui/core';
import React from 'react';
import Contact from "./Contact";
let myStyle=
{
    marginBottom:"10px", 
    padding:"15px",
    textAlign:"center", 
    backgroundColor:"white",
    magrin:"10px", 
    hight:"100%",
    width:"100%",
    boxShadow: "2px 5px 8px  #334488" 
}




function Experience() {
    return (
        <div>
            
         
        <div style={myStyle}>
        <div style={{fontFamily: "sans-serif"}}>
        <IconButton>  Head & Organizer of  <b>Sciecne Exihibition in 2016 & 2021</b> at Muslim Model High school.
        </IconButton></div>   
            <h2 style={{marginTop:"6%", marginBottom:"6%",  borderTopStyle:"groove",
            borderBottomStyle:"groove",
            background:"linear-gradient(90deg, rgba(100,200,1), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(200deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)" , 
            color:"white"
            }} >Experience 8 Year (Teaching)</h2>
            <ul className="list-group" style={{margin:"15px"}}>
            <li className="list-group-item active">Now, Serving As a<b style={{fontFamily:"serif", backgroundColor:"red"}}> Lecturer of Computer Sciecne </b> at M.M.S.C Satiana Banglow <span >(1 April 2019 to Continue)</span></li>
            <li className="list-group-item ">Served As Computer Science Teacher at M.M.H.S Satiana (1 December to 31 March 2019) </li>
            <li className="list-group-item active">Served As Science Teacher at Bright Way School System Lahore (1 January 2014 to 30 November 2014)</li>
            <li className="list-group-item">Served As Primary Teacher at Moot Educations Foundation Lahore (10 September 2013 to 31 December 2013)</li>
        </ul>
      </div>
       <Contact/>
        </div>
    )
} 

export default Experience
