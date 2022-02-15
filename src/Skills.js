import React from 'react';
import Contact from './Contact';
let myStyle={
    color: "#494050",
    wight:"10px",
    margonTop: "100",
    paddin: "5px",
    textAlign: "center",
    Width: "400px",
    hight: "500px",
    border: "2px",
    magrinTop: "100px",
    boxShadow: "5px 10px 10px #f2f99d",
  }
  




function Skills() {
    return (
        <div style={myStyle}>
            <h2 style={{borderTopStyle:"groove", borderBottomStyle:"groove",
        background:"linear-gradient(176deg, rgba(190,190,190,.1), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(100,255,100,1), rgba(0,255,0,0) 70.71%), linear-gradient(200deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)" , 
        color:"white"
        }} >Skills</h2>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-4"   >Hard Skills</h1>
            <p className="lead">  Inpage<br />Ciso Packet Tracer <br />  Typing Speed 35wpm.<br /> Calligrapher: (English)-(خط نستعلیق ) <br/>
             Hardware/Software Solutions (MS-Office, Linux/Windows)  <br />  
            </p>
            </div>    <hr /><hr />
            <h1 className="display-4"  >Soft Skills</h1>
            <p className="lead">I can recite Holy Quran in multiple ascense. My Hobby is coding,cricket, gardening, I'm currently Practising React development.</p>
            </div>
            <Contact/>
        </div>

        
    )
}

export default Skills
