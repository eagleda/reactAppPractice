import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Infos";
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr /> {/*horizontal rule*/}
      {visible && <Info />}
    </div>
  );
};

export default App;
