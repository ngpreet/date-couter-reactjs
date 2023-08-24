import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Date Counter</h3>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }

  function handleDecreaseStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        Step: {step}
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
