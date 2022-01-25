/*eslint-disable*/ 
import React, { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import styled from 'styled-components'
import './Detail.scss';
import {재고context} from './App.js'; 

let 박스 = styled.div` 
            padding : 20px; 
          `; 
let 제목 = styled.h4` 
            font-size : 25px; 
            color : ${ props => props.색상 }; 
          `;
          
function Detail(props) {

  let 재고 = useContext(재고context);

  let [alert, alert변경] = useState(true);

  useEffect(()=>{
    // 컴포넌트가 mount 되었을 때
    // 컴포넌트가 update 될 때
    // 특정코드를 실행할 수 있음
    // console.log(111);
    let timer = setTimeout(()=>{ alert변경(false) }, 2000);
    // return function 어쩌구() { 실행할 코드~~~ // 컴포넌트가 사라질 때 코드를 실행시킬수도 있음}
  });

  // useEffect(()=>{
  //    // 여러개 사용 가능 순서대로 실행됨.
  // })

  let history = useHistory();
  let { id } = useParams();
  
  let item_id = props.shoes.find(function(shoes) {
    return shoes.id == id
  })

  return (
  <div className="container">
    <박스> 
      <제목 className='red'>Detail</제목>
      {/* <제목 색상="blue">안녕하세요1</제목> 
      <제목 색상={'red'}>안녕하세요2</제목> */}
    </박스>

    {
      alert == true
      ? (<div className='my-alert-yellow'>
          <p>재고가 얼마 남지 않았습니다</p>
         </div>)
      : null
    }
    

    <div className="row">
      <div  className="col-md-6">
        <img src={"https://codingapple1.github.io/shop/shoes"+item_id.id+".jpg"} width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{item_id.title}</h4>
        <p>{item_id.content}</p>
        <p>{item_id.price}원</p>

        <Info 재고={props.재고}></Info>

        <button className="btn btn-danger" onClick={ ()=>{ 
          // 사본을 만들어서 쓰기
          props.재고변경([9,11,12])
         } }>주문하기</button> 
      </div>
    </div>
  </div>  
  )  
}

function Info(props) {
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail;
