import React from 'react';
import './DropDown.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col,Row, Button} from 'react-bootstrap';  



class DropDown extends React.Component {
  constructor(){
    super();
    this.state={
   
    };
  }

  componentDidMount() {
   
}


  


  render() {
   return(
    <Container >
        <div className='box'>
             <Row>
            <Col className='title' >
            Move To...
            </Col>
        </Row>
        <Row>
            <Col className='options'  onClick={this.boxClick}>
            Currently Reading
            </Col>
        </Row>
        <Row>
            <Col className='options'  >
            Want To Read
            </Col>
        </Row>
        <Row>
            <Col className='options'  >
            Read
            </Col>
        </Row>
        <Row>
            <Col className='options'  >
           None
            </Col>
        </Row>
        
        </div>
       
    </Container>
    )
    }}


export default DropDown;