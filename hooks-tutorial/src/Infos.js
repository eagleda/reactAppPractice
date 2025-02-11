import React, { useReducer } from "react";

function reducer(state, action) {
  //state와 action을 파라미터로 받아와 새로운 상태를 반환하는 함수
  return {
    //new state
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "", //여러개 한번에
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target); //dispatch함수는 state를 새로운 값으로 업데이트 하고 리렌더링을 일으킴
    //dispatch의 유일한 인수는 action, e.target 자체를 액션값으로 사용
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};
export default Info;
//input 입력시 onchange 이벤트 발생 -> onChange함수 호출 -> dispatch함수 호출 -> state 업데이트 -> 리렌더링
