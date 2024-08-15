import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0, //constructor메서드 없이 state 객체로 상태 선언 가능
  };

  render() {
    const { number, fixedNumber } = this.state; //state 조회시 "this".state 로
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            }); //상태의 number를 +1하는 함수
            this.setState((prevState) => ({
              number: prevState.number + 1,
            })); //함수에서 바로 객체를 반환함, 값 변환시 return없이 사용할 수 있음.
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
