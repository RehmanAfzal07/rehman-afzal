import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Certifications from './Certifications';
import Projects from './Projects';
import Skills from './Skills';

let myStyle = {
  backgroundColor: '#FAF9F9',
  Font: "opinion Pro"
}

function App() {
  return (
    <div style={myStyle}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/certifications" component={Certifications} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
     
    </div>
  )
}

export default App
