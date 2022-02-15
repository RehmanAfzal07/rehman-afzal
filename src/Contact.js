
import React from 'react';

let myStyle = {
  padding: "15px",
  textAlign: "center",
  //background: "linear-gradient(to bottom left, white 50%, white 50%)",
  hight: "100%",
  width: "100%",
  boxShadow: "2px 5px 8px  white",
  marginBottom: 'auto',
  margintop: '10px',
  backgroundColor: "#f6f7a9"
  
};

function Contact() {
 
  
  return (
    
    <div style={myStyle}>
      {/* <h2 style={{backgroundColor: "#2fe6c8"}}>Contact</h2>  */}
      <br />
      <a  style={{margin:"10px"}} className="btn btn-primary btn-lg btn-floating"
        href="https://www.twitter.com/@RehmanAfzal_27"
        role="button">
          
        <i className="fab fa-twitter"></i>
      </a> {' '}
      <a style={{margin:"10px"}} className="btn btn-danger btn-lg btn-floating"
        href="https://www.instagram.com/_rehman.afzal_"
        role="button">
        <i className="fab fa-instagram"></i>
      </a> 
      {' '}
      <a   style={{margin:"10px"}} className="btn btn-light btn-lg btn-floating"
        href="https://www.linkedin.com/in/rehman-afzal-774507228"
        role="button">
        <i className="fab fa-linkedin"></i>
      </a>
      {' '}
      <a   style={{margin:"10px" , backgroundColor:"lime"}} className="btn btn- btn-lg btn-floating" 
        href="https://wa.me/+923401004094"
        role="button">
        <i className="fab fa-whatsapp"></i>
      </a>
       {' '}
      <a   style={{margin:"10px"}} className="btn btn-primary btn-lg btn-floating"
        href="https://www.facebook.com/rehmanafzal909"
        role="button">
        <i className="fab fa-facebook"></i>
      </a>    
    </div>
    
  );
}

export default Contact;
