import React, { useReducer } from "react";
//useReducer를 사용하면 상태 업데이트 로직을 컴포넌트 밖으로 빼낼 수 있음
//CounterWithReducer 컴포넌트에서 나온 상태 업데이트 로직 reducer
function reducer(state, action) {
  //state와 action을 파라미터로 받아와 새로운 상태를 반환하는 함수
  switch (
    action.type //action 객체의 type 값에 따라 다른 작업 수행
  ) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state; //아무것도 해당되지 않을 때 기존 상태 반환
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
export default CounterWithReducer;
