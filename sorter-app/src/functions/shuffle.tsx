import { Numbers } from "../types";
import { sleep } from "./sleep";

interface shuffleProps {
  numbers: Numbers;
  setArray: React.Dispatch<React.SetStateAction<Numbers>>;
  delay: number;
}

//Fisher-Yates shuffle courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export async function shuffle(props: shuffleProps) {
  const {numbers, setArray, delay} = props
  let arrayCopy = numbers.array
  const length = arrayCopy.length;
  let currentIndex = 0;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex < length - 1) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex++;

    // And swap it with the current element.
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[currentIndex],
    ];

    setArray((p) => ({...p, array: [...arrayCopy]}));
    await sleep(delay);
  }
  return;
}
