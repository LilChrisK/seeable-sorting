import { bubbleProps, Numbers, shuffleProps } from "../types";
import { sleep } from "./sleep";

// helper function, swap items in given array at givend indecies
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function clearColors(setArray: React.Dispatch<React.SetStateAction<Numbers>>) {
  setArray((p) => ({
    ...p,
    pivotIndex: null,
    compareIndex: null,
  }));
}

//Fisher-Yates shuffle courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export async function shuffle(props: shuffleProps) {
  const { numbers, setArray, delay } = props;
  let arrayCopy = numbers.array;
  const length = arrayCopy.length;
  let currentIdx = 0;
  let randomIdx: number;

  // While there remain elements to shuffle.
  while (currentIdx < length - 1) {
    // Pick a remaining element.
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx++;

    // And swap it with the current element.
    swap(arrayCopy, currentIdx, randomIdx);

    // Delay and update UI
    await sleep(delay);
    setArray((p) => ({
      ...p,
      array: [...arrayCopy],
      pivotIndex: currentIdx + 1,
      compareIndex: randomIdx,
    }));
  }
  clearColors(setArray);
  return;
}

export async function bubbleSort(props: bubbleProps) {
  const { numbers, setArray, delay } = props;
  let arrayCopy = numbers.array;
  const length = arrayCopy.length;
  let currentIdx: number;
  let compareIdx: number;
  let swapped: boolean;

  for (currentIdx = 0; currentIdx < length - 1; currentIdx++) {
    swapped = false;
    for (compareIdx = 0; compareIdx < length - 1; compareIdx++) {
      if (arrayCopy[compareIdx] > arrayCopy[compareIdx + 1]) {
        swap(arrayCopy, compareIdx, compareIdx + 1);
        swapped = true;
        await sleep(delay);
        setArray((p) => ({
          ...p,
          array: [...arrayCopy],
          pivotIndex: compareIdx,
          compareIndex: compareIdx + 1,
        }));
      }
    }

    if (!swapped) {
      clearColors(setArray);
      break;
    }
  }
}

// function bubblsseSort(arr, n) {
//   var i, j, temp;
//   var swapped;
//   for (i = 0; i < n - 1; i++) {
//     swapped = false;
//     for (j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap arr[j] and arr[j+1]
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }

//     // IF no two elements were
//     // swapped by inner loop, then break
//     if (swapped == false) break;
//   }
// }
