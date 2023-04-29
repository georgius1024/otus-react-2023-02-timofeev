import "@/components/Canvas.scss";
import { ReactElement } from "react";
import Dot from "@/components/Dot";

type clickHandler = (col: number, row: number) => void;
type CanvasProps = {
  cols: number;
  rows: number;
  dx: number;
  dy: number;
  onClick: clickHandler;
};

export default function Canvas(props: CanvasProps): ReactElement {
  const canvasStyle = {
    width: `${props.cols * props.dx}px`,
    height: `${props.rows * props.dy}px`,
  };

  const cols = (row: number) => {
    return new Array(props.cols).fill(0).map((_, col) => {
      return (
        <Dot
          col={col}
          row={row}
          key={`${row}-${col}`}
          cols={props.cols}
          rows={props.rows}
          dx={props.dx}
          dy={props.dy}
          onClick={() => props.onClick(col, row)}
        />
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
