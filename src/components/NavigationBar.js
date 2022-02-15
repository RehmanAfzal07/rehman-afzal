import React from 'react';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import CastForEducationSharpIcon from '@material-ui/icons/CastForEducationSharp';
import MessageSharpIcon from '@material-ui/icons/MessageSharp';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AnnouncementIcon from '@material-ui/icons/Announcement';


const Styles = styled.div`
  
  .navbar { background: linear-gradient(to bottom right,
     white 50%,  50%) }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #4864e6;
    font-wight: 20px;
    &:hover { color:#EB1527; }
    border: goove;
  }
  .navbar-brand {
    font-size: 1.5em;
    font-wight: 80px;
    color: #4864e6;
    &:hover { color: #EB1527; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><  AccountBoxIcon/> PortFolio </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>                
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Item><Nav.Link href="/"><HomeTwoToneIcon/> HOME</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/education"><CastForEducationSharpIcon/> EDUCATION</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/experience"><MessageSharpIcon/>  EXPERIENCE</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/certifications"><CardMembershipIcon/> CERTIFICATIONS</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/skills"><LocalActivityIcon/> SKILLS</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/projects"><AnnouncementIcon/> PROJECTS</Nav.Link></Nav.Item>
          {/* <Nav.Item><Nav.Link href="/contact"><ContactMailIcon/> CONTACT</Nav.Link></Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>                       
  </Styles>
)
                    