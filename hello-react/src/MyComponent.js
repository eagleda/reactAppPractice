import PropTypes from "prop-types"; //import 필요
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
  favoriteNumber: 5,
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
/*
• array: 배열

• arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열을 의미합니다. 예를 들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열입니다.

• bool: true 혹은 false 값

• func: 함수

• number: 숫자

• object: 객체

• string: 문자열

• symbol: ES6의 Symbol

• node: 렌더링할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드. children도 node PropType입니다.)

• instanceOf(클래스): 특정 클래스의 인스턴스(예: instanceOf(MyClass))

• oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나

• oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나

• objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체

• shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체

• any: 아무 종류
*/

export default MyComponent;
//화살표 함수는 함수를 파라미터(인자)로 전달할 때 주로 사용됨

//reactjs code snippet 확장 프로그램의 rsc/rcc를 사용하여
// 함수형/클래스형 컴포넌트를 빠르게 만들 수 있다.
// snippet? :재사용 가능한 소스 코드, 기계어, 텍스트의 작은 부분
