import React,{useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from 'react-bootstrap/Button';
import { FormControlLabel } from '@material-ui/core';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import {FormContext} from './FormContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Media from 'react-media';

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }
  


function Create() {
    const [allData, setallData] = useContext(FormContext);
    //form values
    // const [allData, setallData] = useState([]);
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
      setallData(prev => [...prev, {name:data.name, desc:data.desc, location:placevalue, category:catvalue,
    followers:value, min_budget:data.min, max_budget:data.max}])
    console.log(data);
  };
console.log(allData);
  //range selector value
    const classes = useStyles();
  const [value, setValue] = React.useState([0, 15000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

//multiselect
  const [placevalue, setplacevalue] = useState('')
  const  handleOnplace  =  val  => {
      setplacevalue(val)
      console.log(val)
  }
  const  place  = [
    { label:  'Delhi', value:  'Delhi'  },
    { label:  'Chennai', value:  'Chennai'  },
    { label:  'Mumbai', value:  'Mumbai'  },
    { label:  'Agra', value:  'Agra'  },
]

const [catvalue, setcatvalue] = useState('')
const  handleOncat  =  val  => {
    setcatvalue(val)
    console.log(val)
}
const  cat  = [
    { label:  'Food', value:  'Food'  },
    { label:  'Vlog', value:  'Vlog'  },
    { label:  'Food-Product', value:  'Food-Product'  },
    { label:  'Fashion', value:  'Fashion'  },
]


    return (
    <div>
       {/* Media-query */}
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
     
                     <Row style={{marginTop:'50px', marginLeft:"10px"}}>
                         <Col><h4>Create Campaign</h4> <Link to="/detail">(All Campaigns)</Link></Col>
                     </Row>
                     <Row style={{marginTop:'30px', marginLeft:"10px"}}>
                         <Col xs={11}>
                         <Form onSubmit={handleSubmit(onSubmit)}>
                        
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                             <Form.Label>Name of campaign </Form.Label>
                             <Form.Control name="name" ref={register({ required: true })} as="textarea" rows={1} />
                         </Form.Group>
                         {errors.name && 'campaign name is required.'}
     
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                             <Form.Label>Description</Form.Label>
                             <Form.Control name="desc" ref={register({ required: true })} as="textarea" rows={3} />
                         </Form.Group>
                         {errors.desc && 'description is required.'}
     
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Target location of your campaign</Form.Label>
                             <MultiSelect
                             
                             onChange={handleOnplace}
                             options={place}
                            
                             />
                         </Form.Group>
                        
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Category(s) of your campaign</Form.Label>
                             <MultiSelect
                            
                             onChange={handleOncat}
                             options={cat}
                      
                             />
                         </Form.Group>
                        
     
                         <Form.Group>
                             <div className={classes.root}>
                             <Typography id="range-slider" gutterBottom>
                             No of followers
                             </Typography>
                             <Slider
                                 value={value}
                                 max={100000}
                                 onChange={handleChange}
                                 valueLabelDisplay="auto"
                                 aria-labelledby="range-slider"
                                 getAriaValueText={valuetext}
                             />
                             </div>
                         </Form.Group>
     
                         <Form.Group controlId="exampleForm.ControlSelect1">
                             <Form.Label>Average response time of the Influencers</Form.Label>
                             <Form.Control  name="avg" ref={register({ required: true })}  size="lg" as="select">
                             <option>&lt; 1 Day</option>
                             <option>&lt; 2 Day</option>
                             <option>&lt; 3 Day</option>
                             <option>&lt; 4 Day</option>
                             <option>&lt; 5 Day</option>
                             </Form.Control>
                         </Form.Group>
                         {errors.avg && 'fill the average response time.'}
     
                        what is your Budget for this campaign?
                         <Form.Row>
                             <Form.Group as={Col} controlId="formGridCity">
                             <Form.Control name="min" ref={register({ required: true })} size="lg" type="text" placeholder="| " />
                             </Form.Group>
                             {errors.min && 'Minimum budget is required.'}
     
                             <Form.Group as={Col} controlId="formGridCity">
                             <Form.Control name="max" ref={register({ required: true })} size="lg" type="text" placeholder="MAX "/>
                             </Form.Group>
                             {errors.max && 'Max budget Limit is required.'}
                         </Form.Row>
     
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Post Engagement rate of the Influencers</Form.Label>
                             <Form.Control name="post_eng" ref={register({ required: true })} size="lg" type="text" placeholder="" />
                         </Form.Group>
                         {errors.post_eng && 'Max budget Limit is required.'}
     
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Kind of brand Collab</Form.Label>
                             <Form.Control name="brand" ref={register({ required: true })} size="lg" type="text" placeholder="Free, Free Product" />
                         </Form.Group>
                         {errors.brand && 'brand collabration is required.'}
     
                         <Form.Group>
                             <Form.Label>Have you worked with any brand?</Form.Label>
                             {['radio'].map((type) => (
                             <div key={`custom-inline-${type}`} className="mb-3">
                             <Form.Check
                                 custom
                                 inline
                                 label="Yes"
                                 type={type}
                                 id={`custom-inline-${type}-1`}
                             />
                             <Form.Check
                                 custom
                                 inline
                                 label="No"
                                 type={type}
                                 id={`custom-inline-${type}-2`}
                             />
                             </div>
                         ))}
                             </Form.Group>
                         
                             <button type='submit' className="Rectangle-button">
                                 Create
                             </button>
                         </Form>
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
     
                 <Row className="Web-box">
                     <Card className="Rectangle-Copy ">
                     <Card.Body>
                     <Row style={{marginTop:'50px', marginLeft:"50px"}}>
                         <Col xs={7}><h4>Create Campaign</h4> <Link to="/detail">(All Campaigns)</Link></Col>
                     </Row>
                     <Row style={{marginTop:'30px', marginLeft:"50px"}}>
                         <Col xs={7}>
                         <Form onSubmit={handleSubmit(onSubmit)}>
                        
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                             <Form.Label>Name of campaign </Form.Label>
                             <Form.Control name="name" ref={register({ required: true })} as="textarea" rows={2} />
                         </Form.Group>
                         {errors.name && 'campaign name is required.'}
     
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                             <Form.Label>Description</Form.Label>
                             <Form.Control name="desc" ref={register({ required: true })} as="textarea" rows={3} />
                         </Form.Group>
                         {errors.desc && 'description is required.'}
     
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Target location of your campaign</Form.Label>
                             <MultiSelect
                             
                             onChange={handleOnplace}
                             options={place}
                             width={400}
                             />
                         </Form.Group>
                        
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Category(s) of your campaign</Form.Label>
                             <MultiSelect
                            
                             onChange={handleOncat}
                             options={cat}
                             width={400}
                             />
                         </Form.Group>
                        
     
                         <Form.Group>
                             <div className={classes.root}>
                             <Typography id="range-slider" gutterBottom>
                             No of followers
                             </Typography>
                             <Slider
                                 value={value}
                                 max={100000}
                                 onChange={handleChange}
                                 valueLabelDisplay="auto"
                                 aria-labelledby="range-slider"
                                 getAriaValueText={valuetext}
                             />
                             </div>
                         </Form.Group>
     
                         <Form.Group controlId="exampleForm.ControlSelect1">
                             <Form.Label>Average response time of the Influencers</Form.Label>
                             <Form.Control  name="avg" ref={register({ required: true })}  size="lg" as="select">
                             <option>&lt; 1 Day</option>
                             <option>&lt; 2 Day</option>
                             <option>&lt; 3 Day</option>
                             <option>&lt; 4 Day</option>
                             <option>&lt; 5 Day</option>
                             </Form.Control>
                         </Form.Group>
                         {errors.avg && 'fill the average response time.'}
     
                        what is your Budget for this campaign?
                         <Form.Row>
                             <Form.Group as={Col} controlId="formGridCity">
                             <Form.Control name="min" ref={register({ required: true })} size="lg" type="text" placeholder="| " />
                             </Form.Group>
                             {errors.min && 'Minimum budget is required.'}
     
                             <Form.Group as={Col} controlId="formGridCity">
                             <Form.Control name="max" ref={register({ required: true })} size="lg" type="text" placeholder="MAX "/>
                             </Form.Group>
                             {errors.max && 'Max budget Limit is required.'}
                         </Form.Row>
     
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Post Engagement rate of the Influencers</Form.Label>
                             <Form.Control name="post_eng" ref={register({ required: true })} size="lg" type="text" placeholder="" />
                         </Form.Group>
                         {errors.post_eng && 'Max budget Limit is required.'}
     
                         <Form.Group controlId="exampleForm.ControlInput1">
                             <Form.Label>Kind of brand Collab</Form.Label>
                             <Form.Control name="brand" ref={register({ required: true })} size="lg" type="text" placeholder="Free, Free Product" />
                         </Form.Group>
                         {errors.brand && 'brand collabration is required.'}
     
                         <Form.Group>
                             <Form.Label>Have you worked with any brand?</Form.Label>
                             {['radio'].map((type) => (
                             <div key={`custom-inline-${type}`} className="mb-3">
                             <Form.Check
                                 custom
                                 inline
                                 label="Yes"
                                 type={type}
                                 id={`custom-inline-${type}-1`}
                             />
                             <Form.Check
                                 custom
                                 inline
                                 label="No"
                                 type={type}
                                 id={`custom-inline-${type}-2`}
                             />
                             </div>
                         ))}
                             </Form.Group>
                         
                             <button type='submit' className="Rectangle-button">
                                 Create
                             </button>
                         </Form>
                         </Col>
                     </Row>
                     </Card.Body>
                     </Card>
                 </Row>
            </Container>
            )
          }
        </Media>

    </div>
       
    )
}

export default Create
