import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [perc, setPerc] = useState("");
  const [perc2, setPerc2] = useState("");

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Survey perc={perc} setPerc={setPerc}>
        How did you like the service?
      </Survey>
      <Survey perc={perc2} setPerc={setPerc2}>
        How did your friend like the service?
      </Survey>
      <Calculation bill={bill} perc={perc} perc2={perc2} />
      <Reset setBill={setBill} setPerc={setPerc} setPerc2={setPerc2} />
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="block">
      <h4>How much was the bill?</h4>
      <input
        placeholder="Enter Bill Amount"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />
    </div>
  );
}

function Survey({ perc, setPerc, children }) {
  return (
    <div className="block">
      <h4>{children}</h4>
      <select onChange={(e) => setPerc(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Calculation({ perc, perc2, bill }) {
  const tipPercent = (perc + perc2) / 2 / 100;
  console.log(tipPercent);
  const tip = tipPercent * bill;
  const total = bill + tip;

  return <h2>{`You pay $${total} ($${bill} + ${tipPercent}% tip)`}</h2>;
}

function Reset({ setBill, setPerc, setPerc2 }) {
  function reset() {
    setBill(0);
    setPerc(0);
    setPerc2(0);
  }

  return <button onClick={reset}>Reset</button>;
}

export default App;
