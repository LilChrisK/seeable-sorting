export type Numbers = {
  array: number[];
  pivotIndex: number | null;
  compareIndex: number | null;
};

export type NumbersUpdate = {
  array?: number[];
  i?: number | null;
  j?: number | null;
};

export interface shuffleProps {
  numbers: Numbers;
  updateNumbers: (props: NumbersUpdate) => void;
  delay: number;
}

export interface bubbleProps {
    numbers: Numbers;
    setNumbers: React.Dispatch<React.SetStateAction<Numbers>>;
    delay: number;
}