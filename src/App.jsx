import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("Button Click");
  }
  const handleClick2 = () => {
    alert("Button Click 2");
  };
  const addTOFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
      {/* ektu vejhailla */}
      <button onClick={() => addTOFive(3)}>Four</button>
    </>
  );
}

export default App;
