import React,{useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';
import {FormContext} from './FormContext';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUsers, faMapMarker, faDatabase,faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import Media from 'react-media';

function AllDetail() {
    const [allData, setallData] = useContext(FormContext);
    return (
       <div>
            <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
                <Container fluid>
                <Row className='Rectangle'>
                   <Col></Col>
                   <Col>
                       <h5 style={{color:"white"}}>Influensure</h5>
                   </Col>
                   <Col></Col>
                </Row>

                   <Row style={{marginTop:'80px'}}>
                        <Col >
                        <div className="grid-container">
                       {
                           allData.map(res => {
                               return(
                                <div className="grid-item">
                                <Card >
                                <Card.Body>
                                    <Card.Title>{res.name}</Card.Title>
                                   
                                    <Card.Text>
                                    {res.desc}
                                    </Card.Text>
                                    <Row >
                                        <Col xs={1}><FontAwesomeIcon icon={faUsers} color="#ff8896"/> </Col>
                                        <Col><h6>{res.followers}</h6></Col>
                                        <Col md={{ span:4, offset: 2 }}>
                        
                                            <h6>{res.min_budget}-{res.max_budget} ₹</h6>
                                        </Col>
                                    </Row>
                                    &nbsp;
                                    <Row>
                                        <Col xs={1}><FontAwesomeIcon icon={faMapMarker} color="#ff8896"/></Col>
                                        <Col>
                                        
                                        <h6>Locations</h6>
                                        <div>
                                           {res.location}
                                        </div>
                                        </Col>
                                    </Row>
                                    &nbsp;
                                    <Row>
                                    <Col xs={1}><FontAwesomeIcon icon={faDatabase} color="#ff8896"/></Col>
                                        <Col>
                                        <h6>Catagories</h6>
                                        <div>
                                          {res.category}
                                        </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                </Card>
                                </div>
                               )
                           })
                       }
                       </div>
         
                        </Col>
                    </Row>
               
           </Container>
            ) 
            
            :
            
            (
                <Container fluid>
                <Row className='Rectangle'>
                   <Col style={{marginLeft:'60px'}}><h5>Influensure</h5></Col>
                   <Col><h6>About us</h6> </Col>
                   <Col><h6>How it Works</h6></Col>
                   <Col><h6>Solutions</h6></Col>
                   <Col><h6>Blog</h6></Col>
                   <Col><h6>pricing</h6></Col>
                   <Col xs={2}></Col>
                  <Col md="auto"><h6><FontAwesomeIcon icon={faSignInAlt}/> Login &nbsp; &nbsp; &nbsp; | </h6></Col>
                  <Col md="auto"> <button type='submit' className="header-Rectangle-button">
                        Get Started Today
                    </button></Col>
               </Row>
               <Row className="detail-Web-box">
                   <Row style={{marginTop:'80px'}}>
                        <Col xs={2}></Col>
                        <Col xs={6}>
                        <div className="grid-container">
                       {
                           allData.map(res => {
                               return(
                                <div className="grid-item">
                                <Card style={{ width: '25rem', height:'22rem'}}>
                                <Card.Body>
                                    <Card.Title>{res.name}</Card.Title>
                                   
                                    <Card.Text>
                                    {res.desc}
                                    </Card.Text>
                                    <Row >
                                        <Col xs={1}><FontAwesomeIcon icon={faUsers} color="#ff8896"/> </Col>
                                        <Col><h6>{res.followers}</h6></Col>
                                        <Col md={{ span:4, offset: 2 }}>
                        
                                            <h6>{res.min_budget}-{res.max_budget} ₹</h6>
                                        </Col>
                                    </Row>
                                    &nbsp;
                                    <Row>
                                        <Col xs={1}><FontAwesomeIcon icon={faMapMarker} color="#ff8896"/></Col>
                                        <Col>
                                        
                                        <h6>Locations</h6>
                                        <div>
                                           {res.location}
                                        </div>
                                        </Col>
                                    </Row>
                                    &nbsp;
                                    <Row>
                                    <Col xs={1}><FontAwesomeIcon icon={faDatabase} color="#ff8896"/></Col>
                                        <Col>
                                        <h6>Catagories</h6>
                                        <div>
                                          {res.category}
                                        </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                </Card>
                                </div>
                               )
                           })
                       }
                       </div>
         
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
               </Row>
         
           </Container>
            )
          }
        </Media>
       </div>
      
    )
}

export default AllDetail
