import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    }; //state 초깃값 설정하기
  }

  render() {
    const { number, fixedNumber } = this.state; //state 조회시 "this".state 로
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); //상태의 number를 +1하는 함수
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
