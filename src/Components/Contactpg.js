import './Contactpg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Row, Col, Offcanvas, Card, Form,Navbar,Container } from 'react-bootstrap';
import content1 from '../Image/content1.jpg'
import Swal from 'sweetalert2'
import { GiGraduateCap } from "react-icons/gi";
import gif from '../Image/gif.gif'
import emailjs from 'emailjs-com';

function Contactpg() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send('service_Loki18y', 'template_LoKI22', formData, 'kFrN6lR2kh_PTZUpU')
        .then((response) => {
          console.log('Email sent successfully: ', response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sent successfully",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((error) => {
          console.error('Email sent failed:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to send email",
            showConfirmButton: false,
            timer: 1500
          });
        });
    };

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
        <img className='contact' src={content1} />
        <div className='contacttxt'>
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
        <Navbar.Brand style={{ marginTop:"2%",color:"white",fontFamily:"-moz-initial",fontSize:"35px"}}> Contact Me</Navbar.Brand>
        <Button style={{fontFamily:"-moz-initial"}} variant="outline-light" className='hom3'onClick={handleShow}>View More</Button>
      </Container>
    </Navbar>
          <Row style={{marginTop:"3%"}}>
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={8}>
            <Card style={{fontFamily:"cursive", fontWeight:"bolder"}} className='carddown'>
            <Card.Header as="h5">Contact Me</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={3} />
                </Form.Group>
                <Button type="submit" variant="outline-dark" style={{ marginLeft: "42%" }} className='hom4'>Submit</Button>
              </Form>
            </Card.Body>
    </Card>
    <br/>
    <div>
                  <a href='https://www.facebook.com/profile.php?id=100013067073254'><i style={{marginLeft:"27%", fontSize:"30px", color:"#0863F7"}} class="bi bi-facebook"></i></a>
                  <a href='https://www.instagram.com/_mr____loki_/'><i style={{marginLeft:"9%", fontSize:"30px", color:"#BD496E"}} class="bi bi-instagram"></i></a>
                  <a href='https://www.linkedin.com/in/d-logesh-8668a8267/'><i style={{marginLeft:"10%", fontSize:"30px", color:"#0C61BF"}} class="bi bi-linkedin"></i></a>
                  <a href='https://github.com/Logesh83'><i style={{marginLeft:"10%", fontSize:"30px", color:"white"}} class="bi bi-github"></i></a>
                  </div>

            </Col>
            <Col xs={12} md={2}></Col>
          </Row>
     




        </div>
      
    </div>
  )
}

export default Contactpg
