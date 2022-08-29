import React,{ useEffect, useState } from 'react';
import './Details.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Col,Row} from 'react-bootstrap';  
import {useParams} from "react-router-dom";
import { FaCalendarAlt } from 'react-icons/fa';

function Details(props){
  const { id,state } = useParams()
  const [data, setData] = useState(null);

useEffect(() => {
  const url = `https://openlibrary.org/works/${id}.json`
  
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json)
      setData(json);
      
      
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
  
}, []);
  return (
   
<Container>
   { data && 
      <Row>
        <Col xs={3} md={3} lg={3}>
         {typeof data.covers === "undefined"?<img className="bookimage" src="bookimage.jpg"   />:
          <img className="bookimage" src=
                  {`https://covers.openlibrary.org/b/id/${data.covers[1]}-M.jpg`}   />}
        </Col>
        <Col xs={7} md={7} lg={7}>
        <Row>
        <Col className="datatitle">{data.title}</Col>
        
        </Row>
        <Row>{
         data.last_modified && data.last_modified.value &&
        <Col className='lastmodified'><FaCalendarAlt/> {data.last_modified.value.slice(0,10)}</Col>
          }
        </Row>
        <Row>
        { data.description && data.description.value && <Col className='datadescription'>{data.description.value}</Col>}
        </Row>
        </Col>
      { state == "currentlyreading" &&
        <Col className='state'>
        Currently<br/>Reading
        </Col>
     }
       { state == "wanttoread" &&
        <Col className='state'>
        Want to read
        </Col>
     }
       { state == "read" &&
        <Col className='state'>
        Read
        </Col>
     }
      </Row>
    }
  </Container>
  );
}
export default Details;