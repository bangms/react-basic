
import React, { useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';

function Detail(props) {

  let history = useHistory();
  let { id } = useParams();
  
  let item_id = props.shoes.find(function(shoes) {
    return shoes.id == id
  })

  return (
  <div className="container">
    <div className="row">
      <div  className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{item_id.title}</h4>
        <p>{item_id.content}</p>
        <p>{item_id.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div>  
  )  
}

export default Detail;
