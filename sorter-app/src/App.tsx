import React from "react";
import { useState } from "react";
import { Button } from "./components/Button";
import { Column } from "./components/Column";
import { bubbleSort, insertionSort, shuffle } from "./functions/sortFunctions";
import { Numbers, NumbersUpdate } from "./types";

// const ara = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const arr = Array.from(Array(50).keys());
const max = arr.length;

function App() {
  const [numbers, setNumbers] = useState<Numbers>({
    array: arr,
    violetIdx: null,
    roseIdx: null,
  });

  function updateNumbers(props: NumbersUpdate) {
    let { array, violetIdx, roseIdx } = props;

    if (array === undefined) {
      array = [...numbers.array];
    }
    if (violetIdx === undefined) {
      violetIdx = numbers.violetIdx;
    }
    if (roseIdx === undefined) {
      roseIdx = numbers.roseIdx;
    }

    setNumbers({
      array: array,
      violetIdx: violetIdx,
      roseIdx: roseIdx,
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
            violetIdx={numbers.violetIdx}
            roseIdx={numbers.roseIdx}
            size={max}
          />
        ))}
      </div>

      <div className="flex flex-row gap-2">
        <Button
          onClick={async () =>
            shuffle({
              numbers: numbers,
              updateNumbers: updateNumbers,
              delay: 10,
            })
          }
        >
          shuffle
        </Button>
        <Button
          onClick={async () =>
            bubbleSort({
              numbers: numbers,
              updateNumbers: updateNumbers,
              delay: 10,
            })
          }
        >
          Bubble Sort
        </Button>
        <Button
          onClick={async () =>
            insertionSort({
              numbers: numbers,
              updateNumbers: updateNumbers,
              delay: 5,
            })
          }
        >
          insertion Sort
        </Button>
      </div>
    </div>
  );
}
export default App;
