import React from "react";
// const ara = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const arr = Array.from(Array(100).keys());
console.log(arr);
shuffle(arr);
console.log(arr);
const max = arr.length;

//courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array: number[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function App() {
  return (
    <div className="bg-slate-700 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row items-stretch justify-center w-96 h-64 border border-emerald-500">
        {arr.map((n) => (
          <Column n={n} max={max} />
        ))}
      </div>
    </div>
  );
}

interface ColumnProps {
  max: number;
  n: number;
}

function Column(props: ColumnProps) {
  return (
    <div className="flex flex-col justify-end grow bg-slate-400">
      <div
        className="bg-sky-700 border border-slate-500"
        style={{ height: `${(props.n / props.max) * 100}%` }}
      />
      {/* <div className="bg-orange-600" style={{height: "55%"}}/> */}
    </div>
  );
}

export default App;
