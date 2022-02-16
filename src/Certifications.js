import React from 'react'
import Contact from './Contact';
let myStyle={
  padding:"15px",
  textAlign:"center", 
  magrin:"2px" , 
  color: "DarkSlateGray",
  hight:"100%",
  width:"100%",
  boxShadow: "5px 10px 8px  #334488" 
}






function Certifications() {
    return (
      <div>
        <div style={myStyle}>
            <h2 style={{ borderTopStyle:"groove", borderBottomStyle:"groove",
          background:"linear-gradient(176deg, rgba(200,100,200,1), rgba(255,100,140,0.1) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(200deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)" , 
          color:"white"
          }}>Certifications</h2>
            <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="mean.PNG" alt="MEAN/Full Stack Dev course" />
    <div className="card-body">
      <h5 className="card-title">MEAN/Full-Stack-DEV </h5>
      <p className="card-text">This course is offered by PSEB(Pakistan Export Board with collaboration of CORVIT System Lahore)</p>
    </div>
    
    <div className="card-footer">
      <small className="text-muted">Last updated  6 month ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="Rehman-Afzal_ccna.jpg" alt="CCNA course" />
    <div className="card-body">
      <h5 className="card-title">CCNA </h5>
      <p className="card-text">This course is offered by PSEB(Pakistan Export Board with collaboration of CORVIT System Lahore)</p>
    </div>
    
    <div className="card-footer">
      <small className="text-muted">Last updated 6 month ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="Rehman-Afzal_wp.jpg" alt="Wordpress course" />
    <div className="card-body">
      <h5 className="card-title">WordPress</h5>
      <p className="card-text">WordPress is offered by Minisrty of Information Technology & Telecom by the collaboration of Virtual University.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 6 month ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="Rehman-Afzal_fr.jpg" alt=" Freelancing course" />
    <div className="card-body">
      <h5 className="card-title">Freelancing</h5>
      <p className="card-text">Freelancing is offered by Minisrty of Information Technology & Telecom by the collaboration of Virtual University.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 6 month ago</small>
    </div>
  </div>
</div>
  </div>
  <Contact/>
  </div>
        
    )
}

export default Certifications
