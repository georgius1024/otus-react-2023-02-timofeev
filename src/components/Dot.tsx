import { ReactElement } from "react";
type clickHandler = (col: number, row: number) => void;
type DotProps = {
  col: number,
  row: number,
  cols: number;
  rows: number;
  dx: number;
  dy: number;
  onClick: clickHandler;
};

const DOT_SIZE = 48;

export default function Dot(props: DotProps): ReactElement {
  const cellStyle = (row: number, col: number) => {
    return {
      left: `${(col + 0.5) * props.dx - DOT_SIZE / 2}px`,
      top: `${(row + 0.5) * props.dy - DOT_SIZE / 2}px`,
      width: `${DOT_SIZE}px`,
      height: `${DOT_SIZE}px`,
    };
  };

  return (
    <div
      className="cell"
      data-testid="cell-dot-marker"
      style={cellStyle(props.row, props.col)}
      onClick={() => props.onClick(props.col, props.row)}
    ></div>
  );
}
