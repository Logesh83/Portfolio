import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col } from 'react-bootstrap';
import imgintro6 from '../Image/imgintro6.gif'
import { useNavigate } from 'react-router-dom';
import './Intropg.css'
import 'font-awesome/css/font-awesome.min.css';


function Intropg() {
 
    const [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    navigate('/Homepg');
  };
  return (
    <div>
        <img className='intro' src={imgintro6} alt="Introduction"/>
      <Row>
    
      <Col xs={12} md={4}></Col>
      <Col xs={12} md={4}> 
      
  
    
         <div className='l1' style={{ padding: '20px',marginTop:"10%" }}>
        <h1 className="intro1" style={{ fontSize: "70px" }}> Welcome </h1>
        <h3 className="intro1" style={{ fontSize: "50px" }}> To</h3>
        <h5 className="intro1" style={{ fontSize: "40px" }}>My website</h5>
        <div className="intro1" style={{ marginTop: '40px' }}>
          <Button className='v1' variant="outline-light" size="lg" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
            {isLoading ? 'Loading…' : 'Click Here'}
          </Button>
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <a href='https://www.facebook.com/profile.php?id=100013067073254'><i style={{ fontSize: "30px", color: "#0863F7" }} className="bi bi-facebook" ></i></a>
          <a href='https://www.instagram.com/_mr____loki_/'><i style={{ marginLeft: "40px", fontSize: "30px", color: "#BD496E" }} className="bi bi-instagram"></i></a>
          <a href='https://www.linkedin.com/in/d-logesh-8668a8267/'><i style={{ marginLeft: "40px", fontSize: "30px", color: "#0C61BF" }} className="bi bi-linkedin"></i></a>
          <a href='https://github.com/Logesh83'><i style={{ marginLeft: "40px",marginRight:"5%", fontSize: "30px", color: "white" }} className="bi bi-github"></i></a>
          </div>
          
      </div>
      
      
      </Col>
      <Col xs={12} md={4}></Col>
      
     
      </Row>
      
    </div>
    
  );
}
export default Intropg

