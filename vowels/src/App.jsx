import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      setSubmitted(input.trim());
      setInput("");
    }
  };

  return (
    <main className="app">
      <h1>Vowel Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter A Word"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p className="word">{submitted}</p>}
    </main>
  );
}

export default App;
