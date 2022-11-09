import React from "react";
import { Numbers } from "../types";

interface ColumnProps {
  value: number
  selfIndex: number;
  pivotIndex: number | null;
  compareIndex: number | null;
  size: number;
}

export function Column(props: ColumnProps) {
  const {value, selfIndex, pivotIndex, compareIndex, size} = props

  function getBgColor() {
    
    switch(selfIndex) {
      case pivotIndex:
        return 'bg-violet-900'
      case compareIndex:
        return 'bg-rose-900'
      default:
        return 'bg-sky-700'
    }
  }

  return (
    <div className="flex flex-col-reverse grow bg-slate-400">
      <div
        className={`border border-slate-500 ${getBgColor()}`}
        // className="bg-sky-700 border border-slate-500"
        style={{ height: `${(value / size) * 100}%` }} />
    </div>
  );
}
