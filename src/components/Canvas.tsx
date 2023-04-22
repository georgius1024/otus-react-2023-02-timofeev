import "@/components/Canvas.scss";
import { ReactElement } from "react";
type clickHandler = (col: number, row: number) => void;
type CanvasProps = {
  cols: number;
  rows: number;
  dx: number;
  dy: number;
  onClick: clickHandler;
};

const DOT_SIZE = 48;

export default function Canvas(props: CanvasProps): ReactElement {
  const canvasStyle = {
    width: `${(props.cols) * props.dx}px`,
    height: `${(props.rows) * props.dy}px`,
  };

  const cellStyle = (row: number, col: number) => {
    return {
      left: `${(col + 0.5) * props.dx - DOT_SIZE / 2}px`,
      top: `${(row + 0.5) * props.dy - DOT_SIZE / 2}px`,
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
          onClick={() => props.onClick(col, row)}
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
