import { shuffleProps } from "../types";
import { sleep } from "./sleep";

// helper function, swap items in given array at givend indecies
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Fisher-Yates shuffle courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export async function shuffle(props: shuffleProps) {
  const { numbers, updateNumbers, delay } = props;
  let arr = numbers.array;
  const length = arr.length;
  let currIdx = 0;
  let randIdx: number;

  // While there remain elements to shuffle.
  while (currIdx < length - 1) {
    // Pick a remaining element.
    randIdx = Math.floor(Math.random() * currIdx);
    currIdx++;
    // Color current pair and wait
    updateNumbers({ violetIdx: currIdx + 1, roseIdx: randIdx });
    await sleep(delay / 2);

    // Swap current elements and update UI
    swap(arr, currIdx, randIdx);
    updateNumbers({ array: arr, violetIdx: randIdx, roseIdx: currIdx + 1 });
    await sleep(delay / 2);
  }
  //clear colors
  updateNumbers({ violetIdx: null, roseIdx: null });
  return;
}

export async function bubbleSort(props: shuffleProps) {
  const { numbers, updateNumbers, delay } = props;
  let arr = numbers.array;
  const length = arr.length;
  let i: number, j: number;
  let swapped: boolean;

  for (i = 0; i < length - 1; i++) {
    swapped = false;
    // Repeadedly swap adjacent items if theyre in the wrong order.
    for (j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        updateNumbers({ violetIdx: j, roseIdx: j + 1 });
        await sleep(delay / 2);
        swap(arr, j, j + 1);
        swapped = true;
      }
      // Update UI and delay
      updateNumbers({ array: arr, violetIdx: j + 1, roseIdx: j });
      await sleep(delay / 2);
    }
    // If no swapp occured, exit the function.
    if (!swapped) {
      //clear colors
      updateNumbers({ violetIdx: null, roseIdx: null });
      break;
    }
  }
}

// Function to sort an array using insertion sort
export async function insertionSort(props: shuffleProps) {
  const { numbers, updateNumbers, delay } = props;
  let arr = numbers.array;
  const length = arr.length;
  let i: number, j: number, key: number;

  for (i = 1; i < length; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      updateNumbers({violetIdx: j + 1, roseIdx: j });
      await sleep(delay / 2);

      swap(arr, j, j + 1);
      // Update UI and delay
      updateNumbers({array: arr ,violetIdx: j, roseIdx: j +1 });
      await sleep(delay / 2);
      j--;
    }
  }
  // Clear colors
  updateNumbers({ violetIdx: null, roseIdx: null });
}
