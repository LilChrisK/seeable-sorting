import React from "react";

interface ColumnProps {
  max: number;
  n: number;
}
export function Column(props: ColumnProps) {
  return (
    <div className="flex flex-col-reverse grow bg-slate-400">
      <div
        className="bg-sky-700 border border-slate-500"
        style={{ height: `${(props.n / props.max) * 100}%` }} />
      {/* <div className="bg-orange-600" style={{height: "55%"}}/> */}
    </div>
  );
}
