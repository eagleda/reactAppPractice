import Counter from "./Counter";
import Say from "./Say";
import ValidationSample from "./ValidationSample";
import React from "react";
import EventPractice from "./EventPractice";
import ScrollBox from "./ScrollBox";

const App = () => {
  return (
    <div>
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      {/*cmp단위로도 ref를 달 수 있음*/}
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
  );
};

export default App;
