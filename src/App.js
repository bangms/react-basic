/* eslint-disable */ 

import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js' // 무조건 ./로 시작 (./ 현재 경로라는 뜻)
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios'; // ajax를 사용하기 위한 라이브러리
// Ajax는 1. jQuery Ajax를 쓰든가, 2. axios 설치해서 쓰든가, 3. 쌩자바스크립트 fetch()를 쓰든가
// 리액트 개발환경에선 axios 혹은 fetch()를 많이 사용


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
            
            { shoes.map( (a,i) => { 
                return <Card shoes={shoes[i]} i={i} /> 
              } )
            }

            </div>
            <button className="btn btn-primary" onClick={ ()=>{
              // fetch('주소').then() 호환성이 별로 안좋음 
              // result 데이터는 object 가 아니라 json 형태의 자료임
              // 출력해보면 object 인데욧? axious 가 알아서 json을 object로 바꿔줌
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // 성공하면 실행할 코드
                // console.log("성공");
                console.log(result.data);
                // 숙제) 더보기 누르면 data안에 있는 값 나타내기
                // for(let i = 0; i < result.data.length; i++) {
                //   return <Card shoes={result.data[i]} i={i} />
                // }
                // card 몇개 더 만들어주세요가 아니라 state에 데이터 3개 추가하기.
                // 그럼 알아서 card 레이아웃 6개가 될거니까
                changeShoes([...shoes, ...result.data]);
                // shoes라는 기존 state 데이터를 괄호 벗겨서 넣고
                // result.data라는 데이터도 괄호 벗겨서 넣어라
                // 그리고 이걸 전부 [] 감싸서 array를 만들어라.....

              })
              .catch(()=>{
                // 실패하면 실행할 코드
                console.log("실패");
              })
            } }>더보기</button>
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
        {/* <Route path="/:id">  */}
        {/* /모든문자 라는 경로를 의미 */}
          {/* <div>아무거나 적었을 때 이거 보여줘</div>
        </Route> */}

      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
