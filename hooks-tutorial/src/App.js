import React, { useState } from "react";
import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";
import Info from "./Infos";
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <CounterWithReducer />
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default App;
