import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target); //dispatch함수는 state를 새로운 값으로 업데이트 하고 리렌더링을 일으킴
    //dispatch의 유일한 인수는 action, e.target 자체를 액션값으로 사용
  };
  return [state, onChange];
}
//useInputs 함수는 useReducer를 사용하여 state와 dispatch 함수를 반환
