import React from "react";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Button, Paper } from '@material-ui/core';
import Contact from "./Contact"
import { GiClick } from 'react-icons/gi';





let myStyle = {
  padding: "2px",
  textAlign: "center",
  color: "#213970",
  Width: "400px",
  hight: "500px",
  border: "2px",
  boxShadow: "3px 6px 8px #3399ff",
}

function Home() {
  const [shown, setShown] = React.useState(false)
  function toggleShown() {
    setShown(shown => !shown)
  }

  return (
    <div style={myStyle}>
      <Paper elevation={3} />
      <div class="container">
        <div>
          <h1 style={{
            borderTopStyle: "inset",
            borderBottomStyle: "inset", fontSize: "30px",
            background: "linear-gradient(106deg, rgba(195,180,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(200deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)"
            , color: "white", marginTop: "5px"
          }}>R E H M A N  -  A F Z A L</h1>   
       
        </div>
        <div class="row">
          <div class="col">
            <img  style={{ 
              width: "auto", hight: "auto%", marginLeft: "auto",
              background: "radial-gradient(circle at 50% 0,rgba(255,0,0,.5), rgba(255,0,0,0) 70.71%) radial-gradient(circle at 6.7% 75%, rgba(0,0,255,.5), rgba(0,0,255,0) 70.71%)",
              borderRadius: "50%"
            }}  src="rehman.Afzal.jpg" />
          </div>
         
          <div class="col">
            <ul style={{ marginLeft: "0%", marginTop: "5%" }}>
            <li ><Button onClick={toggleShown} style={{ color: "#FFFFFF", width: "100%", backgroundColor: "#a2ea", marginTop: "10px" }}>Lecturer     <h5 style={{marginLeft: "35px"}}> <GiClick/></h5> </Button></li>
              <div>{shown && <p style={{ color: "#b2ff"}}>I have been serving as a  Computer Science Lecturer since April, 2019.</p>}</div>
              <li><Button onClick={toggleShown} style={{ color: "#FFFFFF", width: "100%", backgroundColor: "#390879", marginTop: "10px" }}>React Developer</Button></li>
              <div>{shown && <p style={{ color: "#690899"}}> It's modern age, without knowledge of advance technology, we shall unaware from it's wonders. I
                am working as a <b>React (A JS Library)</b> front-end Developer, by making small projects. click to view.
                <a href="/projects">PROJECTS <AnnouncementIcon/> </a></p>}</div>
              <li><Button onClick={toggleShown}  style={{ color: "#FFFFFF", width: "100%", backgroundColor: "crimson  ", marginTop: "10px" }}>Mentor</Button></li>
              <div>{shown && <p style={{ color: "crimson"}}>As a Teacher I'm mentor first, because it is necessory to be become a teacher.</p>}</div>
               <li><Button onClick={toggleShown} style={{ color: "#FFFFFF", width: "100%", backgroundColor: "#5feb63", marginTop: "10px" }}>Teacher</Button></li>
              <div>{shown && <p style={{ color: "#5feb63"}}>I have taught at well-known institute for 6 year. Currently, I'm  managing academy.</p>}</div>
              <li><Button onClick={toggleShown} style={{ color: "#FFFFFF", width: "100%", backgroundColor: "#f4b41a", marginTop: "10px" }}>Motivational Speaker</Button></li>
              <div>{shown && <p style={{ color: "#f4b41a"}}>Motivation is key of success for teaching. You must be a motivation speaker to become effective teacher.   </p>}</div>
            </ul>
          </div>
        </div>
        
     
     
      </div>
    

      <div>
        <Contact />
      </div>
    </div>

  )
}

export default Home;
