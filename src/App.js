import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0)
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  function calculate(e) {
    e.preventDefault()
    setLower((220 - age) * 0.65)
    setUpper((220 - age) * 0.85)
  }

  return (
    <div id="content">
      <hr />
      <h3>Heart rate limits calculator</h3>
      <form action="" onSubmit={calculate}>
        <div>
          <label htmlFor="">Age</label>
          <input type="text" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Heart rate limits</label>
          <output>{lower.toFixed(2)} - {upper.toFixed(2)}</output>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
