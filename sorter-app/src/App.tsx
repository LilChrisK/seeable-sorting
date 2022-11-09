import React from "react";
import { useState } from "react";
import { Column } from "./components/Column";
import { bubbleSort, insertionSort, shuffle } from "./functions/sortFunctions";
import { Numbers, NumbersUpdate } from "./types";

// const ara = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const arr = Array.from(Array(50).keys());
const max = arr.length;

function App() {
  const [numbers, setNumbers] = useState<Numbers>({
    array: arr,
    pivotIndex: null,
    compareIndex: null,
  });

  function updateNumbers(props: NumbersUpdate) {
    let { array, i, j } = props;

    if (array === undefined) {
      array = [...numbers.array];
    }
    if (i === undefined) {
      i = numbers.pivotIndex;
    }
    if (j === undefined) {
      j = numbers.compareIndex;
    }

    setNumbers({
      array: array,
      pivotIndex: i,
      compareIndex: j,
    });
  }

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
          onClick={async () =>
            shuffle({ numbers: numbers, updateNumbers: updateNumbers, delay: 10 })
          }
          // onClick={handleShuffle}
        >
          Shuffle
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () =>
            bubbleSort({ numbers: numbers, updateNumbers: updateNumbers, delay: 1000 })
          }
        >
          Bubble Sort
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () =>
            insertionSort({
              numbers: numbers,
              updateNumbers: updateNumbers,
              delay: 50,
            })
          }
        >
          insertion Sort
        </button>
      </div>
    </div>
  );
}
export default App;
