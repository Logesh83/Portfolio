import './Projectpg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, NavDropdown,Navbar,Container,Nav, Row, Col, Offcanvas } from 'react-bootstrap';
import project1 from '../Image/project1.jpg'
import age1 from '../Image/age1.jpg'
import calulater1 from '../Image/calulater1.jpg'
import vaild1 from '../Image/vaild1.jpg'
import ecommerce1 from '../Image/ecommerce1.jpg'
import tonetrend from '../Image/tonetrend.jpg'
import { GiGraduateCap } from "react-icons/gi";
import gif from '../Image/gif.gif'
import { AnimateOnChange } from 'react-animation'

function Projectpg() {
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
      Home('/Homepg')}
    const click2 = () => {
        Educate('/Educationpg')}
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
  return (
    <div>
        <img className='probg' src={project1}/>
        <div className='protxt'>
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
      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand style={{ marginTop:"2%",color:"white",fontFamily:"-moz-initial",fontSize:"35px"}}> My Projects</Navbar.Brand>
        <Button style={{fontFamily:"-moz-initial"}} variant="outline-light" className='hom3'onClick={handleShow}>View More</Button>
      </Container>
    </Navbar>
    <Row style={{marginTop:"80px"}}>
  
      <Col xs={12} md={3}>
      <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
      <img className='agepic' src={age1}/><br/>
      <Button variant="outline-light" className='keys1'style={{marginLeft:"39%", marginTop:"5%", fontFamily:"-moz-initial"}}>Age Calulater</Button>
      </AnimateOnChange>
      </Col>
      <Col xs={12} md={3}>
      <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
      <img className='calulaterpic' src={calulater1}/><br/>
      <Button variant="outline-light" className='keys1'style={{marginLeft:"40%", marginTop:"5%", fontFamily:"-moz-initial"}}>Calulater</Button>
      </AnimateOnChange>
      </Col>
      <Col xs={12} md={3}>
      <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
      <img  className='vaildpic'src={vaild1}/><br/>
      <Button variant="outline-light" className='keys1'style={{marginLeft:"40%", marginTop:"5%", fontFamily:"-moz-initial"}}>Vaild a from</Button>
      </AnimateOnChange>
      </Col>
      <Col xs={12} md={3}>
      <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
      <img  className='ecommercepic'src={ecommerce1}/><br/>
      <Button variant="outline-light" className='keys1'style={{marginLeft:"29%", marginTop:"5%",fontFamily:"-moz-initial"}}>Go to Shopping</Button>
      </AnimateOnChange>
      </Col>
      
        </Row><hr style={{color:"white"}}></hr>
        <Row>
          <Col md={4} xs={12}></Col>
          <Col md={6} xs={12}>
          <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
      <img  className='tonetrend' style={{marginLeft:"40%"}} src={tonetrend}/><br/>
      <a href='http://www.tonetrends.online/'><Button variant="outline-light" className='keys1'style={{marginLeft:"75%", marginTop:"5%",fontFamily:"-moz-initial"}}>Groomming</Button></a>
      </AnimateOnChange>
          </Col>
          <Col md={4} xs={12}></Col>
        </Row>
        </div>
        
        
      
    </div>
  )
}

export default Projectpg