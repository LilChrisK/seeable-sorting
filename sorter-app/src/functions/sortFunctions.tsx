import { bubbleProps, Numbers, shuffleProps } from "../types";
import { sleep } from "./sleep";

// helper function, swap items in given array at givend indecies
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Fisher-Yates shuffle courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export async function shuffle(props: shuffleProps) {
  const { numbers, setArray, delay } = props;
  let arrayCopy = numbers.array;
  const length = arrayCopy.length;
  let currentIndex = 0;
  let randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex < length - 1) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex++;

    // And swap it with the current element.
    swap(arrayCopy, currentIndex, randomIndex);

    await sleep(delay);
    setArray((p) => ({
      ...p,
      array: [...arrayCopy],
      pivotIndex: currentIndex + 1,
      compareIndex: randomIndex,
    }));
  }
  setArray((p) => ({
    ...p,
    pivotIndex: null,
    compareIndex: null,
  }));
  return;
}

export async function bubbleSort(props: bubbleProps) {
  const { numbers, setArray, delay } = props;
  let arrayCopy = numbers.array;
  const length = arrayCopy.length;
  // let currentIndex = 0;
  // let randomIndex: number;
}
