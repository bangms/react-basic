/* eslint-disable */ // 터미널에 뜨는 경고 없애기
import React, { useState } from 'react';
import './App.css';

function App() {

  let [title, newTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); 

  let posts = '서버에서 가져온 데이터';
  // state 값 / state 변경 함수 // addcount(1) // count가 1로 변경됨 // addcount(대체할데이터)
  let [count, addcount] = useState(0);

  let [modal, modal변경] = useState(false); // boolean 값을 가진 state // 모달창을 켜고 닫는 스위치
  let [누른제목, 누른제목변경] = useState(0);
 
  let [입력값, 입력값변경] = useState(''); // 초기값 ''
 
  // for in / for of 키워드도 동일한 방법으로 사용
  function 반복된UI() {
    
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    
    return 어레이; 
  }

  var arr = [2,3,4];
  // array 내의 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 .map()

  var newArr = arr.map(function(a) {
    return a * 2
  });
  // 이 자리에 [4,6,8] 남음 // .map()은 유사 반복문

  function test() {
    return 100;
  }

  function changeTitle() {
    //newTitle( ['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'] ); // state를 아예 대체하는 함수
    // 복사본을 만들어서 수정 (deep copy를 해서 수정) (그냥 복사 X 그냥 복사는 그냥 값 공유일 뿐임) deep copy 값 공유 X / 서로 독립적인 값을 가짐  [...title]
    // 리액트 대 원칙 : immutable data
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    newTitle( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'gray', fontSize: '30px'} }>개발 Blog</div>
      </div> 
      {/* changeTitle() 로 넣으면 바로 실행이 되기 때문에 클릭이 됐을 때만 실행이 되도록 해야하므로 () 제외하고 입력 */}
      {/* <button onClick={ changeTitle }>버튼</button> */}
      {/* <div className="list"> */}
        {/* 좋아요 버튼 만들기 */}
        {/* <h3> { title[0] } <span onClick={ () => { addcount(++count) } }>👍</span> { count } </h3>  */}
        {/* <p>1월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>1월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={ () => { modal변경(true)}  }> { title[2] } </h3>
        <p>1월 19일 발행</p>
        <hr />
      </div> */}
      {/* { 반복된UI() } */}
      {
        // 반복문 쓰는 법
        // { 변수명, 함수명 }

        // Map()
        // 반복할 데이터.map( ()=> {return <HTML>} )
        title.map(function(post, i) { // post가 title배열 안에 있는 데이터 하나하나를 의미 // i 반복문 돌 때마다 0,1,2..가 되는 변수
          return (
            <div className="list" key={i}> 
            {/* map 반복문으로 돌린 html에는 key가 필요함 */}
              <h3 onClick={ () => { 누른제목변경(i) } }> { post } <span onClick={ () => { addcount(++count) } }>👍</span> { count } </h3> 
              <p>1월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <div className='publish'>
        <input onChange= { (e) => {입력값변경(e.target.value)} }/>
        <button onClick={ () => { 
          // 실전 서버로 먼저 보내서(ajax 사용) 영구저장 
          var arrayCopy = [...title];
          arrayCopy.unshift(입력값);
          newTitle(arrayCopy);
         } }>저장</button>
      </div>

      {/* 사용자가 입력한 값을 state로 저장 
        뭔가 입력이 될 때 안의 함수가 실행됨 */}
      {/* {입력값}
      <input onChange={ (e) => { 입력값변경(e.target.value) } } /> */}




      {/* <h4>{ posts }</h4> */}
      {/* test() 이런식으로 함수도 가능 */}

      {/* <button onClick={ () => { 누른제목변경(0) } }>버튼1</button>
      <button onClick={ () => { 누른제목변경(1) } }>버튼2</button>
      <button onClick={ () => { 누른제목변경(2) } }>버튼3</button> */}

      <button onClick = { () => { modal변경(!modal) } }>열기</button>

      {
        // if 문은 사용할 수 없음 // if 대신 삼항연산자 사용
        // 1이 3보다 작으면 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        // 1 < 3 
        // ? console.log("맞아요") 
        // : console.log("틀려요")

        // 리액트에선 UI를 만들 때 state 데이터를 이용함
        // UI가 보이는지 안보이는지 정보(상태)를 state로 저장해둠
        // 그리고 if문을 이용해 state가 true일 때 UI를 보여줌
        modal == true
        ? <Modal title={title} 누른제목={누른제목} ></Modal>
        : null // 텅 빈 HTML 이라는 뜻
     }


      {/* <Modal></Modal> */}
      {/* <Modal /> */}

      {/* HTML을 한 단어로 줄여서 쓸 수 있는 방법 (Component)
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>내용</p>
      </div> */}

    </div>
  );
}
/*
  Component 유의사항
  1. 이름은 대괄호
  2. return() 안에 있는 건 태그 하나로 묶어야 함 (제일 바깥 태그는 하나)
    return() 내부를 묶을 때 의미없는 div를 쓰기 싫으면 fragment Tag <> </>
  3. function App 이랑 나란히 만들기 (App도 하나의 컴포넌트)

  어떤 걸 Component로 만드는게 좋을까?
  - 반복출현하는 HTML 덩어리들
  - 자주 변경되는 HTML UI들 (재렌더링이 많이 일어나는 UI들)
  - 다른 페이지 만들 때도 컴포넌트로 만듦

  Component 많이 만들면 단점 : state 쓸 때 복잡해짐
*/

function Modal(props){
  return (
    <div className="modal">
      <h2> { props.title[props.누른제목] } </h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
