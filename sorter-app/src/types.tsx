export type Numbers = {
  array: number[];
  pivotIndex: number | null;
  compareIndex: number | null;
};

export interface shuffleProps {
  numbers: Numbers;
  setArray: React.Dispatch<React.SetStateAction<Numbers>>;
  delay: number;
}

export interface bubbleProps {
    numbers: Numbers;
    setArray: React.Dispatch<React.SetStateAction<Numbers>>;
    delay: number;
}