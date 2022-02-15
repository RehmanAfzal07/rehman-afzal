import {  Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Contact from './Contact';
let myStyle = {
    padding: "2px",
    textAlign: "center",
    //color:"DarkSlateGray",
    Width: "450pxpx",
    hight: "500px",
    border: "2px",
    boxShadow: "3px 6px 8px #3399ff",
    borderTopStyle: "inset",
    borderBottomStyle: "inset",
    marginBottom: "15px",
    background: "linear-gradient(176deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(90,255,180,.8) 70.71%), linear-gradient(200deg, rgba(100,210,255,.2), rgba(100,200,255,0) 70.71%)",
    color: "white"
}



function Projects() {
    return (
        <div>
            <h2 style={myStyle} >
                Projects
            </h2>
           
                <Grid container style={{marginLeft:"auto"}} >
                    <Grid  item style={{display: "flexInline"}}>
                    <Typography variant='h6' align="center" color='secondary'
                    >Shoping Application Screen Shots</Typography>
                    <Card style={{ margin:"10px"  }}><img alt='shoping app' width="350" height="450px" src='../images/homePage.png' /></Card>
                    <Card style={{ margin:"10px"  }}> <img alt='shoping app1'  width="350" height="450px" src='../images/drawer.png' /></Card>
                    <Card style={{ margin:"10px"  }}> <img  alt='shoping app2' width="350" height="450px" src='../images/favorite.png' /></Card>
                    </Grid>

                    <Grid  item style={{display: "flexInline"}}>
                    <Typography variant='h6' align="center" color='secondary'
                    >Continue</Typography>
                    <Card style={{ margin:"10px"  }}>  <img alt='project pic1' width="350" height="450px" src='../images/selectedOption.png' /></Card>
                    <Card style={{ margin:"10px"  }}>  <img  alt='project pic2' width="350" height="450px" src='../images/cartPage.png' /></Card>
                    </Grid>
                     
                    <Grid item style={{display: "flexInline"}} >
                    <Typography variant='h6' align='center' color='secondary'
                     > More Applications Screen Shots</Typography>
                    <Card style={{ margin:"10px"  }}><img alt='project pic3' width="350px" height="350px" src='../images/calander.png' /></Card>
                    <Card style={{ margin:"10px"  }}><img alt='project pic4' width="350px" height="350px" src='../images/stopwacth.png' /></Card>
                    <Card style={{ margin:"10px"  }}><img  alt='project pic5' width="350px" height="350px" src='../images/todo.png' /></Card>
                    <Card style={{ margin:"10px"  }}><img alt='project pic6' width="350px" height="350px" src='../images/travelJournel.png' /></Card>
                    </Grid>

                    

                 </Grid>
            <Contact />
      </div>
    )
}

export default Projects
