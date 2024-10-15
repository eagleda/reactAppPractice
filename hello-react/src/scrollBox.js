import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight; //scrollTop은 요소의 수직 스크롤 바 위치를 나타낸다.
    //출처: https://mong-blog.tistory.com/entry/JS-최대-스크롤값-구하는-법scrollTop-scrollLeft [Mong dev blog:티스토리]
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto", //scroll 이 만들어지도록 overflow를 변경
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
