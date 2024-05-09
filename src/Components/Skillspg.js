import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, ProgressBar, Row, Col, Offcanvas, Navbar, Container } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { useNavigate } from 'react-router-dom';
import skill1 from '../Image/skill1.jpg'
import 'boxicons'
import './Skillspg.css'
import { GiGraduateCap } from "react-icons/gi";
import gif from '../Image/gif.gif'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaComments } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiPuzzle } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";




function Skillspg(props) {



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
  const click3 = () => {
    skill('/Skillspg')
  }
  const click4 = () => {
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
      <img className='skillbg' src={skill1} />
      <div className='skilltxt'>
        <Row>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={10}></Col>
          <div>
            <Offcanvas show={show} onHide={handleClose}>
              <img src={gif} className='gif1' />
              <div className='giftxt'>
                <Offcanvas.Header>
                  <Offcanvas.Title style={{ fontWeight: "bolder", fontSize: "35px", fontFamily: "cursive", color: "white" }}>Info Myself </Offcanvas.Title>
                  <GiGraduateCap style={{ fontSize: "35px", marginLeft: "4%", color: "white" }} />
                </Offcanvas.Header>
                <Offcanvas.Body >
                  <Button className='hom4' variant="dark" size="lg" onClick={click1} style={{ marginTop: "4%", fontFamily: "-moz-initial", paddingRight: "40%", paddingLeft: "40%" }}>Home</Button> <br />
                  <Button className='hom4' variant="dark" size="lg" onClick={click2} style={{ marginTop: "4%", fontFamily: "-moz-initial", paddingRight: "36%", paddingLeft: "35%" }}>Education</Button><br />
                  <Button className='hom4' variant="dark" size="lg" onClick={click4} style={{ marginTop: "4%", fontFamily: "-moz-initial", paddingRight: "39%", paddingLeft: "37%" }}>Projects</Button><br />
                  <Button className='hom4' variant="dark" size="lg" onClick={click3} style={{ marginTop: "4%", fontFamily: "-moz-initial", paddingRight: "41%", paddingLeft: "40%" }}>Skills</Button><br />
                  <Button className='hom4' variant="dark" size="lg" onClick={click5} style={{ marginTop: "4%", fontFamily: "-moz-initial", paddingRight: "34%", paddingLeft: "35%" }}>Experience</Button><br />
                  <Button className='hom4' variant="dark" size="lg" onClick={click6} style={{ marginTop: "4%", fontFamily: "-moz-initial", paddingRight: "35%", paddingLeft: "33%" }}>Contact Me</Button>
                </Offcanvas.Body>
              </div>
            </Offcanvas>
          </div>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand style={{ marginTop: "2%", color: "white", fontFamily: "-moz-initial", fontSize: "35px" }}> My Skills</Navbar.Brand>
              <Button style={{ fontFamily: "-moz-initial" }} variant="outline-light" className='hom3' onClick={handleShow}>View More</Button>
            </Container>
          </Navbar>
          <Col xs={12} md={3}></Col>
        </Row>,<br/>
        <Row>
          <h1 style={{ color: "white", fontFamily: "-moz-initial" }}><u>Technical Skills</u></h1>
          <Col xs={12} md={6} style={{ marginTop: "5%", }}>
            <div >
              <div className='fontup'>
                <i class='bx bxl-html5' style={{ color: "#E44D26", fontSize: "40px" }}></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>HTML</b></span></div>
              <ProgressBar striped variant="success" animated now={97} style={{ width: "90%" }} />;
            </div><br />
            <div >
              <div className='fontup'>
                <i class='bx bxl-css3' style={{ color: "#0062EC", fontSize: "40px" }} ></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>CSS</b></span></div>
              <ProgressBar striped variant="success" animated now={98} style={{ width: "90%" }} />;
            </div><br />
            <div >
              <div className='fontup'>
                <i class='bx bxl-bootstrap' style={{ color: "#8712FB", fontSize: "40px" }}></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>BootStrap</b></span></div>
              <ProgressBar striped variant="success" animated now={90} style={{ width: "90%" }} />;
            </div><br />
            <div >
              <div className='fontup'>
                <i class='bx bxl-javascript' style={{ color: "#F0DB4F", fontSize: "40px" }} ></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>JavaScript</b></span></div>
              <ProgressBar striped variant="success" animated now={90} style={{ width: "90%" }} />
            </div><br />



          </Col>
          <Col xs={12} md={6} style={{ marginTop: "5%" }}>
            <div >
              <div className='fontup'>
                <i class='bx bxl-react' style={{ color: "#00D8FF", fontSize: "40px" }}></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>React</b></span></div>
              <ProgressBar striped variant="success" animated now={90} style={{ width: "90%" }} />;
            </div><br />
            <div >
              <div className='fontup'>
                <i class='bx bxl-mongodb' style={{ color: "#589636", fontSize: "40px" }} ></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>MongoDB</b></span></div>
              <ProgressBar striped variant="success" animated now={80} style={{ width: "90%" }} />;
            </div><br />
            <div >
              <div className='fontup'>
                <i class='bx bxl-nodejs' style={{ color: "#7BA636", fontSize: "40px" }} ></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>Nodejs</b></span></div>
              <ProgressBar striped variant="success" animated now={70} style={{ width: "90%" }} />;
            </div><br />
            <div >
              <div className='fontup'>
                <i class='bx bxl-aws' style={{ color: "#FF9A00", fontSize: "40px" }}></i>
                <span style={{ fontSize: "20px", color: "white", fontFamily: "monospace", marginLeft: "2%" }}><b>AWS</b></span></div>
              <ProgressBar striped variant="success" animated now={80} style={{ width: "90%" }} />;
            </div><br />


          </Col>
          </Row>
<hr style={{ color: "white" }}></hr>
<h1 style={{ color: "white", fontFamily: "-moz-initial" }}><u>Professional Skills</u></h1>
<Row>
  <Col xs={12} md={6}style={{ marginTop: "3%" }}>
    <Row>
      <Col md={6} xs={12} style={{ marginTop: "5%" }}>
        <div><h4 style={{ color: "white" }}><FaComments /> Communication</h4></div>
      </Col>
      <Col md={6} xs={12}>
        <div style={{ width: '45%', height: '45%' }}>
          <CircularProgressbar
            value={85}
            text={`${85}%`}
            strokeWidth={10}
            styles={{
              root: { width: '100%' },
              path: { stroke: '#5f51b5' },
              text: { fill: 'white', fontSize: '20px' },
            }} />
        </div><br/>
      </Col>
    </Row>
    <Row>
      <Col md={6} xs={12} style={{ marginTop: "5%" }}>
        <div><h4 style={{ color: "white" }}><HiOutlineLightBulb /> Creativity</h4></div>
      </Col>
      <Col md={6} xs={12}>
        <div style={{ width: '45%', height: '45%' }}>
          <CircularProgressbar
            value={90}
            text={`${90}%`}
            strokeWidth={10}
            styles={{
              root: { width: '100%' },
              path: { stroke: '#5f51b5' },
              text: { fill: 'white', fontSize: '20px' },
            }} />
        </div>
      </Col>
    </Row >
  </Col>
  <Col md={6} xs={12} >
    <Row style={{ marginTop: "6%" }}>
      <Col md={6} xs={12} style={{ marginTop: "7%" }}>
        <div><h4 style={{ color: "white" }}><GiPuzzle /> Problem Solving</h4></div>
      </Col>
      <Col md={6} xs={12}>
        <div style={{ width: '45%', height: '45%'}}>
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            strokeWidth={10}
            styles={{
              root: { width: '100%' },
              path: { stroke: '#5f51b5' },
              text: { fill: 'white', fontSize: '20px' },
            }} />
        </div><br/>
      </Col>
    </Row>
    <Row>
      <Col md={6} xs={12} style={{ marginTop: "7%" }} >
        <div><h4 style={{ color: "white" }}><HiUserGroup /> Teamwork</h4></div>
      </Col>
      <Col md={6} xs={12}>
        <div style={{ width: '45%', height: '45%' }}>
          <CircularProgressbar
            value={80}
            text={`${80}%`}
            strokeWidth={10}
            styles={{
              root: { width: '100%' },
              path: { stroke: '#5f51b5' },
              text: { fill: 'white', fontSize: '20px' },
            }} />
        </div>
      </Col>
    </Row>&nbsp;
  </Col>
</Row>




      </div>

    </div>
  )
}

export default Skillspg;
