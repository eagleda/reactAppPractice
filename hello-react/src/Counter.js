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
            this.setState(
              {
                number: number + 1,
              },
              //callback function 다른 함수가 실행을 끝낸 뒤 실행되는 callback되는 함수 를 말한다.
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              } //setState에 Callback 함수를 사용하는 경우는 state를 변경 후 변경된 state를 사용하는 경우 등이다
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
