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
      <Bill setBill={setBill} bill={bill}>
        How much was the bill?
      </Bill>
      <Questions perc={perc} setPerc={setPerc}>
        How did you like the service?
      </Questions>
      <Questions perc={perc2} setPerc={setPerc2}>
        How did your friend like the service?
      </Questions>
      <Calculation bill={bill} perc={perc} perc2={perc2} />
      <Reset setBill={setBill} setPerc={setPerc} setPerc2={setPerc2} />
    </div>
  );
}

function Bill({ children, setBill, bill }) {
  return (
    <div className="block">
      <h4>{children}</h4>
      <input
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Questions({ children, perc, setPerc }) {
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

function Calculation({ bill, perc, perc2 }) {
  const total = bill + (perc + perc2) / 2;
  const tip = (perc + perc2) / 2;

  return <h2>{`You pay $${total} ($${bill} + ${tip}% tip)`}</h2>;
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
