import React from 'react'
import Contact from './Contact';
let myStyle={
  marginBottom:"10px", 
    padding:"15px",
    textAlign:"center", 
    backgroundColor:"white",
    magrin:"10px", 
    hight:"100%",
    width:"100%",
    boxShadow: "2px 5px 8px  #334488" ,
    marginTop: '80px'   
}

function Education() {
    return (
      <div>
      <h2 style={{ marginTop: "8%",textAlign: "center", 
       borderTopStyle:"groove", borderBottomStyle: "groove",
       background:"linear-gradient(90deg, rgba(255,100,20,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(200deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)" , 
       color:"white"
       }}> Education Trait</h2>
      
        <div style={myStyle}>
           <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Degree Level</th>
      <th scope="col">Major</th>
      <th scope="col">Grade / Division</th>
      <th scope="col">Board / University</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Matriculation</th>
      <td>Science</td>
      <td>A<sup>+</sup></td>
      <td>BISE Faisalabad</td>
    </tr>
    <tr>
      <th scope="row">Intermidiate</th>
      <td> I.C.S<sub> PHYSICS</sub></td>
      <td>A<sup>+</sup></td>
      <td>BISE Faisalabad</td>
    </tr>
    <tr>
      <th scope="row">Graduation</th>
      <td>BSCS</td>
      <td>1<sup>st</sup></td>
      <td>The University of Punjab Lahore</td>
    </tr>
  </tbody>
</table>
</div>
  <div>
  <Contact/>
  </div>
</div>

    )
}

export default Education
