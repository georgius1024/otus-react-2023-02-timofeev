import { useState } from "react";
import "@/components/Canvas.scss";
type clickHandler = (col: number, row: number) => void;
type CanvasProps = {
  cols: number;
  rows: number;
  dx: number;
  dy: number;
  onClick: clickHandler;
};

const DOT_SIZE = 6;

export default function Canvas(props: CanvasProps) {
  const canvasStyle = {
    width: `${(props.cols - 1) * props.dx}px`,
    height: `${(props.rows - 1) * props.dy}px`,
  };

  const cellStyle = (row: number, col: number) => {
    return {
      left: `${col * props.dx - DOT_SIZE / 2}px`,
      top: `${row * props.dy - DOT_SIZE / 2}px`,
      width: `${DOT_SIZE}px`,
      height: `${DOT_SIZE}px`,
    };
  };

  const cols = (row: number) => {
    return new Array(props.cols).fill(0).map((_, col) => {
      return (
        <div
          key={`${row}-${col}`}
          className="cell"
          data-testid="cell-dot-marker"
          style={cellStyle(row, col)}
          onClick={() => props.onClick(row, col)}
        ></div>
      );
    });
  };
  const rows = () => {
    return new Array(props.rows)
      .fill(0)
      .map((_, row) => cols(row))
      .flat();
  };
  return (
    <div className="canvas" style={canvasStyle}>
      {rows()}
    </div>
  );
}
