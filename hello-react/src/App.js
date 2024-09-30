import Counter from "./Counter";
import Say from "./Say";
import ValidationSample from "./ValidationSample";
import EventPractice from "./EventPractice";
import React, { useRef } from "react";
import ScrollBox from "./ScrollBox";

const App = () => {
  const scrollBoxRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollToBottom();
    }
  };

  return (
    <div>
      <ScrollBox ref={scrollBoxRef} />
      <button onClick={scrollToBottom}>맨 밑으로</button>
    </div>
  );
};

export default App;
