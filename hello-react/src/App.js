import './App.css';
 
function App() {
  const name = '리액트';
  return (
    <>
      <div className="react">{name}</div>
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      > 주석용 div</div>
      <input/> {/* <foo/> :self-closing tag*/}
    </>
  )
}
 
export default App;