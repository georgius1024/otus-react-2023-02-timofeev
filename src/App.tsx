import { useState } from "react";
import "@/App.css";
import Palette from "@/components/Palette";
import Canvas from "@/components/Canvas";
import Node from "@/components/Node";
import { setTimeout } from "timers";

type Sample = {
  color: string;
  symbol: string;
};
type StateSample = Sample | null;
type ChartNode = {
  col: number;
  row: number;
  color: string;
  symbol: string;
};
type Chart = ChartNode[];
type ChartStateNode = ChartNode | null;
const DELTA = 80;
function App() {
  const [currentSample, setSample] = useState<StateSample>(null);
  const [chart, updateChart] = useState<Chart>([]);
  const [rejected, setRejected] = useState<ChartStateNode>(null);

  const paletteClickHandler = (sample: StateSample): void => {
    setSample(sample);
  };
  const canvasClickHandler = (col: number, row: number): void => {
    if (currentSample) {
      const updated: ChartNode[] = [
        ...chart.filter((node) => node.col !== col || node.row !== row),
        {
          col,
          row,
          color: currentSample.color,
          symbol: currentSample.symbol,
        },
      ];
      updateChart(updated);
    }
  };
  const nodeClickHandler = (col: number, row: number): void => {
    if (currentSample) {
      const clickedNode = chart.find(
        (node) => node.col === col && node.row === row
      );
      if (clickedNode) {
        setRejected(clickedNode);
        window.setTimeout(() => setRejected(null), 1000);
        return;
      }

      const updated: ChartNode[] = [
        ...chart.filter((node) => node.col !== col || node.row !== row),
      ];
      updated.push({
        col,
        row,
        color: currentSample.color,
        symbol: currentSample.symbol,
      });
      updateChart(updated);
    } else {
      const updated: ChartNode[] = [
        ...chart.filter((node) => node.col !== col || node.row !== row),
      ];
      updateChart(updated);
    }
  };
  const nodeProps = (node: ChartNode) => ({
    key: `${node.col}x${node.row}`,
    col: node.col,
    row: node.row,
    dx: DELTA,
    dy: DELTA,
    color: node.color,
    symbol: node.symbol,
    background: node.color,
    rejecting: rejected?.col === node.col && rejected?.row == node.row,
    onClick: nodeClickHandler,
  });
  const nodes = chart.map((node, index) => <Node {...nodeProps(node)} />);
  return (
    <div className="App">
      <Palette onClick={paletteClickHandler} />
      <br></br>
      <div className="board">
        <Canvas
          cols={10}
          rows={5}
          dx={DELTA}
          dy={DELTA}
          onClick={canvasClickHandler}
        />
        {nodes}
      </div>
    </div>
  );
}

export default App;
