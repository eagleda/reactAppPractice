import "./App.css";

function App() {
  const name = "리액트";
  return (
    <div>
      <div className="react">{name}</div>
      <h1>들여쓰기가 이상한</h1>
      <h2>코드</h2>
      <p>입니다.</p>
      <h2>
        vsCode에서 F1 + format -&gt; 문서 서식 클릭으로 Prettier를 사용하여
        코드를 정리해보세요.=&gt; shift+ alt+ F{" "}
      </h2>
      {/*<: &lt;(앰퍼샌드 dlf 티 세미콜론): less than , >: &gt;(앰퍼샌드 지 티 세미콜론): greater than */}
    </div>
  );
}

export default App;
