export type Numbers = {
  array: number[];
  violetIdx: number | null;
  roseIdx: number | null;
};

export type NumbersUpdate = {
  array?: number[];
  violetIdx?: number | null;
  roseIdx?: number | null;
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