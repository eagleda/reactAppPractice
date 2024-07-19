function colorLog(state, action) {
    if (state === undefined) {
        state = [];
    }

    if (action.type === "ADD") {
        return state.concat(action.color);
    }
    else if (action.type === "REMOVE") {
        return state.filter(function (item) { //state의 각 아이템
            return item !== action.color;
        })
    }
    else {
        return state;
    }
}
export default colorLog; //함수명을 사용해야함 export {colorLog}
//export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있습니다.
