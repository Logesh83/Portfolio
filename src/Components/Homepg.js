import './Homepg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Button, Row, Col, Offcanvas } from 'react-bootstrap';
import img1 from '../Image/img1.jpeg';
import imgbg1 from '../Image/imgbg1.jpg'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import {Form, useNavigate} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { TypeAnimation, } from 'react-type-animation';
import { AnimateOnChange } from 'react-animation'
import { GiGraduateCap } from "react-icons/gi";
import gif from '../Image/gif.gif'
import logeshresume from '../Components/Logesh-D.pdf'







function Homepg() {
    const Bounce = styled.div`animation : 4s ${keyframes `${bounce}`} infinite`;
    const [show, setShow] = useState(false);
    
    let Home = useNavigate();
    let Educate = useNavigate();
    let skill = useNavigate();
    let project = useNavigate();
    let experience = useNavigate();
    let contact = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

  

    const click1 = () => {
      Home('/Homepg')
      }
    const click2 = () => {
        Educate('/Educationpg')
      } 
    const click3 =() =>{
          skill('/Skillspg')
        }
     const click4 =() =>{
          project('/Projectpg')
        } 
    const click5 = () => {
          experience('/Experiencepg')
        } 
    const click6 = () => {
          contact('/Contactpg')
        }   

    return(
        <>
        
        <img className='bg' src={imgbg1}/>
        <div className='hi'style={{marginTop:"5%"}}>     
      <div>
      <Offcanvas show={show} onHide={handleClose}>
      <img src={gif} className='gif1'/>
      <div className='giftxt'>
        <Offcanvas.Header>
        <Offcanvas.Title style={{fontWeight:"bolder",fontSize:"35px",fontFamily:"cursive", color:"white"}}>Info Myself </Offcanvas.Title>
        <GiGraduateCap  style={{fontSize:"35px", marginLeft:"4%", color:"white"}} />      
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Button className='hom4' variant="dark" size="lg" onClick={click1} style={{marginTop:"4%",fontFamily:"-moz-initial", paddingRight:"40%", paddingLeft:"40%"}}>Home</Button> <br />
        <Button className='hom4' variant="dark" size="lg" onClick={click2} style={{marginTop:"4%",fontFamily:"-moz-initial", paddingRight:"36%", paddingLeft:"35%"}}>Education</Button><br />
        <Button className='hom4' variant="dark" size="lg" onClick={click4} style={{marginTop:"4%",fontFamily:"-moz-initial",paddingRight:"39%", paddingLeft:"37%"}}>Projects</Button><br />
        <Button className='hom4' variant="dark" size="lg" onClick={click3}  style={{marginTop:"4%",fontFamily:"-moz-initial",paddingRight:"41%", paddingLeft:"40%"}}>Skills</Button><br />
        <Button className='hom4' variant="dark" size="lg" onClick={click5} style={{marginTop:"4%",fontFamily:"-moz-initial",paddingRight:"34%", paddingLeft:"35%"}}>Experience</Button><br />
        <Button className='hom4' variant="dark" size="lg" onClick={click6} style={{marginTop:"4%",fontFamily:"-moz-initial",paddingRight:"35%", paddingLeft:"33%"}}>Contact Me</Button>
        </Offcanvas.Body>
        </div>
      </Offcanvas>
      </div>
      <Row> 
      <Col xs={12} md={6}>     
      <div className='infome'>
      <Bounce> <h4> HI I'm </h4>
            <h2>LOGESH</h2>
            <h4>Fullstack MERN Developer</h4>
            </Bounce>
            <br />
            <TypeAnimation
            speed={75}
            style={{ whiteSpace: 'pre-line', height: '195px',width:"195", display: 'block', textAlign:"justify" }}
            sequence={[
            `As, I am strong in developing a base and structure to the fields. Logical and results-driven full stack developer dedicated to building and optimizing user-focused websites and applications. Ability to translate business requirements into technical solutions and as ability of Leadership, Teamwork. Looking to start the careeras an entry-level software engineer with a reputed firm driven by technology.` , // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            1000,
            
          ]}
          repeat={Infinity}
/><br/><br/>
              
                      <Button variant="outline-light" className='blink' style={{marginTop:"4%"}} onClick={handleShow}>View More </Button>
                  <a href={logeshresume} download><Button variant="outline-light" className='hom3'style={{marginTop:"4%", marginLeft:"2%"}}>Download CV</Button></a>                 
                    <br/>
                    <br/>
                    &nbsp;
                  <div className='icon'>
                  <a href='https://www.facebook.com/profile.php?id=100013067073254'><i style={{marginLeft:"9%", fontSize:"30px", color:"#0863F7"}} class="bi bi-facebook"></i></a>
                  <a href='https://www.instagram.com/_mr____loki_/'><i style={{marginLeft:"9%", fontSize:"30px", color:"#BD496E"}} class="bi bi-instagram"></i></a>
                  <a href='https://www.linkedin.com/in/d-logesh-8668a8267/'><i style={{marginLeft:"10%", fontSize:"30px", color:"#0C61BF"}} class="bi bi-linkedin"></i></a>
                  <a href='https://github.com/Logesh83'><i style={{marginLeft:"10%", fontSize:"30px", color:"white"}} class="bi bi-github"></i></a>
                  </div>

        </div>
        </Col>
        <Col xs={12} md={6}>
        <img src={img1} className='i1'/>
        </Col> 
        </Row> 
        </div>
    
    </>
    )
    
}

export default Homepg;
