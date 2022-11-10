import React from "react";

interface ColumnProps {
  value: number
  selfIndex: number;
  violetIdx: number | null;
  roseIdx: number | null;
  size: number;
}

export function Column(props: ColumnProps) {
  const {value, selfIndex, violetIdx, roseIdx, size} = props

  function getBgColor() {
    
    switch(selfIndex) {
      case violetIdx:
        return 'bg-violet-900'
      case roseIdx:
        return 'bg-rose-900'
      default:
        return 'bg-sky-700'
    }
  }

  return (
    <div className="flex flex-col-reverse grow bg-slate-400">
      <div
        className={`border border-slate-500 ${getBgColor()}`}
        style={{ height: `${(value / size) * 100}%` }} />
    </div>
  );
}
