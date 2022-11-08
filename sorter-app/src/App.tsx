import React from "react";
import { useState } from "react";
import { Column } from "./components/Column";
import { shuffle } from "./functions/shuffle";
// const ara = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const arr = Array.from(Array(50).keys());
const max = arr.length;

function App() {
  const [numbers, setNumbers] = useState(arr);

  const handleShuffle = () => {
   let temp = [...numbers]
   shuffle(temp)
   setNumbers(temp)
  }

  return (
    <div className="bg-slate-700 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4 flex w-96 h-64 border border-emerald-500">
        {numbers.map((n) => (
          <Column n={n} max={max} />
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleShuffle}>
        Shuffle
      </button>
    </div>
  );
}

export default App;
