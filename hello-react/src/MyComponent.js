const MyComponent = ({ name, children }) => {
  //함수 파라미터에서 사용가능한 비구조화 할당|destructuring assignment
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
//화살표 함수는 함수를 파라미터(인자)로 전달할 때 주로 사용됨

//reactjs code snippet 확장 프로그램의 rsc/rcc를 사용하여
// 함수형/클래스형 컴포넌트를 빠르게 만들 수 있다.
// snippet? :재사용 가능한 소스 코드, 기계어, 텍스트의 작은 부분
