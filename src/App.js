/*eslint-disable*/ 

import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js' // 무조건 ./로 시작 (./ 현재 경로라는 뜻)
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes, changeShoes] = useState(Data);
  // useState() 안에 data.js에 있는 긴 [] 데이터를 넣어야하는데 너무 기니까
  // 따로 파일을 만들어서 뺀 것.

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
              <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        
        {/* exact 속성 추가하면 경로가 정확히 일치할 경우에만 보여줌 */}
        <Route exact path="/"> 
          <div className="background">
            <h1> 20% Season Off</h1>
            <p>Get to know more about the team maintaining React Bootstrap. Learn a little history of how, why and when the project started and how you can be a part of it.</p>
            <Button variant="secondary">Learn More</Button>
          </div>
          <div className="container">
            <div className="row">
              {
                shoes.map(function(shoes, i) {
                  return <Card item={shoes[i]} i={i} />
                })
              }
            </div>
          </div>
        </Route>
        
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/detail">
          <Detail item={ shoes }/>
        </Route>
        {/* <Route path="/detail/1">
          <Detail item={ shoes }/>
        </Route> */}
        <Route path="/:id"> 
        {/* /모든문자 라는 경로를 의미 */}
          <div>아무거나 적었을 때 이거 보여줘</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width="100%" />
      <h4>{ props.item.title }</h4>
      <p>{ props.item.content } & { props.item.price }</p>
    </div>
  )
}

export default App;
