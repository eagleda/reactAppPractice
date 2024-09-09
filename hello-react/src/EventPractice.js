import React, { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="massage"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            //e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}
export default EventPractice;
