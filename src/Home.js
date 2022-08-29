import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Col,Row} from 'react-bootstrap';  
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsArrowLeft,BsBookshelf,BsCaretDownFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {DebounceInput} from 'react-debounce-input';
import {BrowserRouter as Router,Routes,Switch,Route,Link} from "react-router-dom";

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      currentlyreading:[],
      read:[],
      wanttoread:[],
      search:false,
      searchresults:[],
    };
  }

  componentDidMount() {
    var storedcurrentlyreading = JSON.parse(localStorage.getItem("currentlyreading"));
    if(storedcurrentlyreading!=null ){
      this.setState({currentlyreading:storedcurrentlyreading});
    }
    var storedwanttoread = JSON.parse(localStorage.getItem("wanttoread"));
    if(storedwanttoread!=null ){
      this.setState({wanttoread:storedwanttoread});
    }
    var storedread = JSON.parse(localStorage.getItem("read"));
    if(storedread!=null ){
      this.setState({read:storedread});
    }
   
   
   
}
search(){
    this.setState({search:true});
}
stopSearch(){
    this.setState({search:false});
}
handleKeyDown(e) {
  
      var query = e.target.value.split(" ");
      var link="http://openlibrary.org/search.json?q=";
      for (var i in query) {
        if(i!==0){
          link+="+";
        }
        if(query[i]!==" ")
        link+=query[i];
    }
       
        fetch(link)
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res.docs)
          this.setState({searchresults:res.docs});
        });
    
  }
  addcurrentlyreading(e){
    var link="https://openlibrary.org"+e.target.id+".json"
   
    fetch(link)
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res)
          var newcurrentlyarray=this.state.currentlyreading;
          var newwanttoreadarray=this.state.wanttoread;
          var newreadarray=this.state.read;

          for(var i = 0; i < newcurrentlyarray.length; i++) {
            
            if(newcurrentlyarray[i].key === e.target.id) {
              newcurrentlyarray.splice(i, 1);
              break;
            }
        }
        for(var i = 0; i < newwanttoreadarray.length; i++) {
            
          if(newwanttoreadarray[i].key === e.target.id) {
            newwanttoreadarray.splice(i, 1);
            break;
          }
      }
      for(var i = 0; i < newreadarray.length; i++) {
            
        if(newreadarray[i].key === e.target.id) {
          newreadarray.splice(i, 1);
          break;
        }
    }
        newcurrentlyarray.push(res);
          this.setState({currentlyreading:newcurrentlyarray,searchresults:[],wanttoread:newwanttoreadarray,read:newreadarray
            ,search:false});
            localStorage.setItem("currentlyreading", JSON.stringify(this.state.currentlyreading));
            localStorage.setItem("wanttoread", JSON.stringify(this.state.wanttoread));
            localStorage.setItem("read", JSON.stringify(this.state.read));

        });
  }
  addwanttoread(e){
    var link="https://openlibrary.org"+e.target.id+".json"
   
    fetch(link)
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res)
          var newcurrentlyarray=this.state.currentlyreading;
          var newwanttoreadarray=this.state.wanttoread;
          var newreadarray=this.state.read;

          for(var i = 0; i < newcurrentlyarray.length; i++) {
            
            if(newcurrentlyarray[i].key === e.target.id) {
              newcurrentlyarray.splice(i, 1);
              break;
            }
        }
        for(var i = 0; i < newwanttoreadarray.length; i++) {
            
          if(newwanttoreadarray[i].key === e.target.id) {
            newwanttoreadarray.splice(i, 1);
            break;
          }
      }
      for(var i = 0; i < newreadarray.length; i++) {
            
        if(newreadarray[i].key === e.target.id) {
          newreadarray.splice(i, 1);
          break;
        }
    }
    newwanttoreadarray.push(res);
          this.setState({currentlyreading:newcurrentlyarray,searchresults:[],wanttoread:newwanttoreadarray,read:newreadarray
            ,search:false});
            localStorage.setItem("currentlyreading", JSON.stringify(this.state.currentlyreading));
            localStorage.setItem("wanttoread", JSON.stringify(this.state.wanttoread));
            localStorage.setItem("read", JSON.stringify(this.state.read));
        });
        
   }
   addread(e){
    var link="https://openlibrary.org"+e.target.id+".json"
   
    fetch(link)
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res)
          var newcurrentlyarray=this.state.currentlyreading;
          var newwanttoreadarray=this.state.wanttoread;
          var newreadarray=this.state.read;

          for(var i = 0; i < newcurrentlyarray.length; i++) {
            
            if(newcurrentlyarray[i].key === e.target.id) {
              newcurrentlyarray.splice(i, 1);
              break;
            }
        }
        for(var i = 0; i < newwanttoreadarray.length; i++) {
            
          if(newwanttoreadarray[i].key === e.target.id) {
            newwanttoreadarray.splice(i, 1);
            break;
          }
      }
      for(var i = 0; i < newreadarray.length; i++) {
            
        if(newreadarray[i].key === e.target.id) {
          newreadarray.splice(i, 1);
          break;
        }
    }
    newreadarray.push(res);
          this.setState({currentlyreading:newcurrentlyarray,searchresults:[],wanttoread:newwanttoreadarray,read:newreadarray
            ,search:false});
            localStorage.setItem("currentlyreading", JSON.stringify(this.state.currentlyreading));
            localStorage.setItem("wanttoread", JSON.stringify(this.state.wanttoread));
            localStorage.setItem("read", JSON.stringify(this.state.read));
        });
   }
   remove(e){
    var link="https://openlibrary.org"+e.target.id+".json"
    console.log(link)
    fetch(link)
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res)
          var newcurrentlyarray=this.state.currentlyreading;
          var newwanttoreadarray=this.state.wanttoread;
          var newreadarray=this.state.read;

          for(var i = 0; i < newcurrentlyarray.length; i++) {
            
            if(newcurrentlyarray[i].key === e.target.id) {
              newcurrentlyarray.splice(i, 1);
              break;
            }
        }
        for(var i = 0; i < newwanttoreadarray.length; i++) {
            
          if(newwanttoreadarray[i].key === e.target.id) {
            newwanttoreadarray.splice(i, 1);
            break;
          }
      }
      for(var i = 0; i < newreadarray.length; i++) {
            
        if(newreadarray[i].key === e.target.id) {
          newreadarray.splice(i, 1);
          break;
        }
      }
      this.setState({currentlyreading:newcurrentlyarray,searchresults:[],wanttoread:newwanttoreadarray,read:newreadarray
        ,search:false});
        localStorage.setItem("currentlyreading", JSON.stringify(this.state.currentlyreading));
        localStorage.setItem("wanttoread", JSON.stringify(this.state.wanttoread));
        localStorage.setItem("read", JSON.stringify(this.state.read));
    });

  }

  render() {
   if(!this.state.search){
    return (
        <Container>
           <Row>
          <Col className="titlearea">
          <div className="title">MyReads</div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="headertext">Currently Reading </div>
          <hr/>
          </Col>
        </Row>
        <Row>
      {this.state.currentlyreading.map((book) => (
                    
                    <Col key={book.key} xs={12} md={4} lg={3} >
                    <div className="box">
                      <div className="imagebutton">
                      <Link to={`/bookDetails${book.key}/currentlyreading`}    >
                      {typeof book.covers === "undefined"?<img className="bookimage" src="bookimage.jpg"  />: <img className="bookimage" src=
                      {`https://covers.openlibrary.org/b/id/${book.covers[1]}-M.jpg`}
                       />}
                      </Link>
                      <Dropdown className='btnimage'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='shape'>
       {BsCaretDownFill}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Header>Move To...</Dropdown.Header>
        <Dropdown.Item id={book.key} onClick={event => this.addcurrentlyreading(event)}>Currently Reading</Dropdown.Item>
       
        <Dropdown.Item id={book.key}  onClick={event => this.addwanttoread(event)} >Want To Read</Dropdown.Item>
        <Dropdown.Item id={book.key}  onClick={event => this.addread(event)}>Read</Dropdown.Item>
        <Dropdown.Item id={book.key}  onClick={event => this.remove(event)}>None</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      </div>
                     
                      <div className="booktitle">{book.title}</div>
                      
                    </div>
                </Col>
          ))}
      </Row>
        <Row>
          <Col>
          <div className="headertext">Want to Read </div>
          <hr/>
          </Col>
        </Row>
        <Row>
      {this.state.wanttoread.map((book) => (
                    
                    <Col key={book.key} xs={12} md={4} lg={3} >
                    <div className="box">
                      <div className="imagebutton">
                      <Link to={`/bookDetails${book.key}/wanttoread`}>
                      {typeof book.covers === "undefined"?<img className="bookimage" src="bookimage.jpg"   />: <img className="bookimage" src=
                      {`https://covers.openlibrary.org/b/id/${book.covers[1]}-M.jpg`}   />}
                      </Link>
                      <Dropdown className='btnimage'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='shape'>
       {BsCaretDownFill}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Header>Move To...</Dropdown.Header>
        <Dropdown.Item id={book.key} onClick={event => this.addcurrentlyreading(event)}>Currently Reading</Dropdown.Item>
       
        <Dropdown.Item id={book.key}  onClick={event => this.addwanttoread(event)} >Want To Read</Dropdown.Item>
        <Dropdown.Item id={book.key}  onClick={event => this.addread(event)}>Read</Dropdown.Item>
        <Dropdown.Item id={book.key}  onClick={event => this.remove(event)}>None</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      </div>
                     
                      <div className="booktitle">{book.title}</div>
                      
                    </div>
                </Col>
          ))}
      </Row>
        <Row>
          <Col>
          <div className="headertext">Read </div>
          <hr/>
          </Col>
        </Row>
        <Row>
      {this.state.read.map((book) => (
                    
                    <Col key={book.key} xs={12} md={4} lg={3} >
                    <div className="box">
                      <div className="imagebutton">
                      <Link to={`/bookDetails${book.key}/read`} state="read">
                      {typeof book.covers === "undefined"?<img className="bookimage"  src="bookimage.jpg"  />: <img className="bookimage" src=
                      {`https://covers.openlibrary.org/b/id/${book.covers[1]}-M.jpg`}   />}
                     
                      </Link>
       <Dropdown className='btnimage'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='shape'>
       {BsCaretDownFill}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Header>Move To...</Dropdown.Header>
        <Dropdown.Item id={book.key} onClick={event => this.addcurrentlyreading(event)}>Currently Reading</Dropdown.Item>
       
        <Dropdown.Item id={book.key}  onClick={event => this.addwanttoread(event)} >Want To Read</Dropdown.Item>
        <Dropdown.Item id={book.key}  onClick={event => this.addread(event)}>Read</Dropdown.Item>
        <Dropdown.Item id={book.key}  onClick={event => this.remove(event)}>None</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      </div>
                     
                      <div className="booktitle">{book.title}</div>
                      
                    </div>
                </Col>
          ))}
      </Row>
        <Row>
          <Col className="placebutton">
          <button className="button button5" onClick={() => this.search()}>+</button>
          </Col>
        </Row>
        </Container>

    )}
    else{
        return (
        <Container>
        <Row>
          <Col>
          <InputGroup className="mb-3">
          <InputGroup.Text  className="cursor" onClick={() => this.stopSearch()}> <BsArrowLeft /> </InputGroup.Text>
          <DebounceInput
          placeholder="Search by Title or Author"
          debounceTimeout={400}
          onChange={event => this.handleKeyDown(event)}
          className="searchbar" />
       
        </InputGroup>
          </Col>
        </Row>
        <Row>
      {this.state.searchresults.map((result) => (
                    
                    <Col key={result.key} xs={12} md={4} lg={3} >
                    <div className="box">
                      <div className="imagebutton">
                      
                      {typeof result.cover_i === "undefined"?<img className="bookimage" src="bookimage.jpg"  />: <img className="bookimage" src=
                      {`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}  />}
        <Dropdown className='btnimage'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='shape'>
       {BsCaretDownFill}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Header>Move To...</Dropdown.Header>
        <Dropdown.Item id={result.key} onClick={event => this.addcurrentlyreading(event)}>Currently Reading</Dropdown.Item>
       
        <Dropdown.Item id={result.key}  onClick={event => this.addwanttoread(event)} >Want To Read</Dropdown.Item>
        <Dropdown.Item id={result.key} onClick={event => this.addread(event)}>Read</Dropdown.Item>
        <Dropdown.Item id={result.key} onClick={event => this.remove(event)}>None</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      </div>
                     
                      <div className="booktitle">{result.title}</div>
                      <div className="bookauthor">{result.author_name}</div>
                    </div>
                </Col>
          ))}
      </Row>
        </Container>)
    }
  } }


export default Home;