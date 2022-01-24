/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [title, newTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']); 

  let posts = '서버에서 가져온 데이터';
  let [count, addcount] = useState(0);

  function test() {
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'gray', fontSize: '30px'} }>개발 Blog</div>
      </div> 
      <button onClick={ () => { newTitle(['여자 코트 추천', '강남 우동맛집', '파이썬 독학']) } }>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ () => { addcount(++count) } }>👍</span> { count } </h3>
        <p>1월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>1월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>1월 19일 발행</p>
        <hr />
      </div>
      {/* <h4>{ posts }</h4> */}
      {/* test() 이런식으로 함수도 가능 */}
    </div>
  );
}

export default App;
