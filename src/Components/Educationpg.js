import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button,Navbar,Container,Row, Col, Offcanvas } from 'react-bootstrap';
import imged1 from '../Image/imged1.jpg';
import './Educationpg.css'
import { GiGraduateCap } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import gif from '../Image/gif.gif'



function Educationpg() {
  const [show, setShow] = useState(false);
  let Home = useNavigate();
  let Educate = useNavigate();
  let skill= useNavigate();
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
        <img src={imged1} className='imged'/>
        <div className='imged1' >
        
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
        <Navbar.Brand style={{ marginTop:"2%",color:"white",fontFamily:"-moz-initial",fontSize:"35px"}}> My Education</Navbar.Brand>
        <Button style={{fontFamily:"-moz-initial"}} variant="outline-light" className='hom3'onClick={handleShow}>View More</Button>
      </Container>
    </Navbar>

            <br/>
            <Row style={{marginTop:"10%"}}>
            <Col xs={12} md={4}>
              
             <div className='box'><br/>
              <div style={{color:"white", marginLeft:"5%"}}><i class="bi bi-hourglass-top"></i>           
                <h6>2017 - 2018</h6>
                <h4> SSLC - 54.2%</h4>
                <h5>Cheran Higher Secondary School</h5><br /><br/>
                <p>Visit to my school &nbsp;<a href=' https://www.facebook.com/punnamchathiramcheranschool/videos/our-school/247756286084188/'><Button variant="outline-light" style={{font:"-moz-initial"}}>Click <GiSchoolBag /></Button></a></p>
                </div>
                </div>
            </Col>
           <Col xs={12} md={4}>
                <div className='box'><br />
                <div style={{color:"white",marginLeft:"5%"}}><i class="bi bi-hourglass-split"></i>          
                <h6>2019 - 2020</h6>
                <h4> HSC - 62.2%</h4>
                <h5>Cheran Higher Secondary School</h5><br /><br/>
                <p>Visit to my school &nbsp;<a href=' https://www.facebook.com/punnamchathiramcheranschool/videos/our-school/247756286084188/'><Button variant="outline-light" style={{font:"-moz-initial"}}>Click <GiSchoolBag /></Button></a></p>
                </div>  
                </div>
            </Col>
              <Col xs={12} md={4}>
                <div className='box'><br />
                <div style={{color:"white",marginLeft:"5%"}}><i class="bi bi-hourglass-bottom"></i>          
                <h6>2021 - 2023</h6>
                <h4> Degree - 67.8%</h4>
                <h5>BCOM(Computer Application)</h5>
                <h5>KSR Collage Of Arts And Science</h5>&nbsp;
                <p>Visit to my Collage &nbsp;<a href='https://www.ksrcas.edu/'><Button variant="outline-light" style={{font:"-moz-initial"}}>Click <TbSchool /></Button></a></p>
                </div>
              </div>
            </Col>
            </Row>
          
        </div>
        
      
    </div>
  )
}


export default Educationpg;
