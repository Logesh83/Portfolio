import './Experiencepg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button,Navbar,Container, Row, Col, Offcanvas } from 'react-bootstrap';
import exper1 from '../Image/exper1.jpg'
import objectways1 from '../Image/objectways1.png'
import { AnimateOnChange } from 'react-animation'
import { GiGraduateCap } from "react-icons/gi";
import gif from '../Image/gif.gif'

function Experiencepg() {
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
        <img className='experbg'src={exper1}/>
        <div className='expertxt'>
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
        <Navbar.Brand style={{ marginTop:"2%",color:"white",fontFamily:"-moz-initial",fontSize:"35px"}}> My Experience</Navbar.Brand>
        <Button style={{fontFamily:"-moz-initial"}} variant="outline-light" className='hom3'onClick={handleShow}>View More</Button>
      </Container>
    </Navbar>
                   <h4  >
            </h4>
          <Row style={{marginTop:"10%"}}>
            <Col xs={12} md={5}>
            <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
              <img  className='objectways' src={objectways1} />
              <br />
             <a href='https://objectways.com/'><Button variant="outline-light" className='keys1' style={{marginLeft:"40%",color:"white", fontFamily:"-moz-initial", marginTop:"10%"}}>Cilck Here</Button></a>
             </AnimateOnChange> 

            </Col>
            <br />
            <Col xs={12} md={6}><div> &nbsp
            <AnimateOnChange
  animationIn="bounceIn"
  animationOut="bounceOut"
  durationOut={500}
>
              <h1 style={{fontFamily:"-moz-initial",color:"white"}}>Data Analyst</h1><br />
              
<p className='exppara'><b>We are a social impact sourcing company focused on data labeling services and machine learning with humble beginnings in rural south India. 
                We help improve the business outcomes of our global customers by hiring and providing career 
                development opportunities to people who generally have limited employment prospects. According to our statistics, 
                they are more hard-working, reliable, and dependable than traditional workers. Many have risen to the ranks of 
                project managers and are future leaders. We have pledged to hire 1000 more workers via impact sourcing in the year 2023.</b></p>
  
</AnimateOnChange>
              </div>
            </Col>
          </Row>
          





            
        </div>
      
    </div>
  )
  
}

export default Experiencepg
