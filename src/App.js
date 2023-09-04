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

  function handleStepChange(e) {
    setStep(Number(e.target.value));
  }

  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <div>Step: {step}</div>
        <input type="range" min={1} max={10} value={step} onChange={handleStepChange}/>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="number" value={count} onChange={handleCountChange}/>
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
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
