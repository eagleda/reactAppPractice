import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값을 계산 중...");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b); //reduce 메서드는 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다.
  return sum / numbers.length; // 이때 원본 배열은 변경 되지 않는다.
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //[]:컴포넌트가 처음 렌더링 될때만 함수를 재생성

  const onInsert = useCallback(
    (e) => {
      if (isNaN(parseInt(number))) {
        //isNaN : 숫자가 아닌지 확인하는 함수
        console.log("숫자만 입력 가능합니다.");
        setNumber("");
        inputEl.current.focus();
        return;
      }
      //입력이 숫자가 아니면 로그 출력후 리턴

      const nextList = list.concat(parseInt(number)); //parstInt :  문자열을 정수로 변환 , parse: ~를 ..에 맞게 해석/번역하다.
      setList(nextList);
      setNumber(""); //number값 초기화
      inputEl.current.focus(); //inputEl.current는 실제 DOM엘리먼트를 가리킴
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]); //useMemo를 사용하여 list 배열이 바뀔 때만 getAverage 함수가 호출되도록 설정

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        ref={inputEl} /*null이었던 inputEl을 이 input으로 지정*/
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}> {value}</li> //배열의 map함수를 통해 배열의 각 원소를 꺼내와서 리턴값으로 새로운 li을 만들어낸다.
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};
export default Average;
