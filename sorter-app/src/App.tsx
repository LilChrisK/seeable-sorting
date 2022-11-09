import React from "react";
import { useState } from "react";
import { Column } from "./components/Column";
import { bubbleSort, shuffle } from "./functions/sortFunctions";
import { Numbers } from "./types";

// const ara = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const arr = Array.from(Array(50).keys());
const max = arr.length;

function App() {
  const [numbers, setNumbers] = useState<Numbers>({
    array: arr,
    pivotIndex: null,
    compareIndex: null,
  });

  const handleShuffle = async () => {
    await shuffle({ numbers: numbers, setArray: setNumbers, delay: 100 });
  };

  return (
    <div className="bg-slate-700 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4 flex w-96 h-64 border-2 border-emerald-500">
        {numbers.array.map((n, i) => (
          <Column
            key={n}
            value={n}
            selfIndex={i}
            pivotIndex={numbers.pivotIndex}
            compareIndex={numbers.compareIndex}
            size={max}
          />
        ))}
      </div>

      <div className="flex flex-row gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => shuffle({ numbers: numbers, setArray: setNumbers, delay: 50 })}
          // onClick={handleShuffle}
        >
          Shuffle
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => bubbleSort({ numbers: numbers, setArray: setNumbers, delay: 50 })}
        >
          Bubble Sort
        </button>
      </div>
    </div>
  );
}
export default App;
