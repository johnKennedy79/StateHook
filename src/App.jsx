import { useState } from "react";

export default function App() {
  //const [statevariable, mutationfunction] = useState(value)
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [message1, setMessage1] = useState(false);
  function handleClick() {
    setCount(count + 1);
  }
  function clickDown() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(count - count);
  }
  function showMessage(message) {
    console.log(message);
  }
  const [items, setItems] = useState([
    { id: 0, title: "Knife" },
    { id: 1, title: "Folk" },
    { id: 2, title: "Bottle" },
    { id: 3, title: "Cork" },
    { id: 4, title: "That's the way we say New York!" },
  ]);
  const [username, setUserName] = useState(Jez);
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>count up</button>
      <button onClick={clickDown}>count down</button>
      <button onClick={resetCount}>reset</button>
      <button onClick={() => setMessage1(!message1)}>Click Me !</button>
      {message1 && <p>You should have clicked the other button</p>}
      <button
        onClick={() =>
          showMessage("Well done now click the other button first")
        }
      >
        Click Me first !
      </button>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>You should have clicked one of the other buttons!</p>}
      <h1>Items</h1>
      <ul>
        {items.length ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No items</li>
        )}
      </ul>
      //turnery operator
      <p>{count == 2 ? "count is two" : " "}</p>
      {count > 5 ? <p>count is greater than five</p> : <p>keep clicking</p>}
      // logical conjunction
      <p>{count == 10 && "I equal ten!"}</p>
      <p>{username == Tim && "Tim is being bougy"}</p>
      <p>{username == Jez && "Jez is here hitting hard"}</p>
    </>
  );
}
