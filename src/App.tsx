import { useState, ReactElement, useCallback } from "react";
import "@/App.scss";
import Palette from "@/components/Palette";
import Canvas from "@/components/Canvas";
import Node from "@/components/Node";

import type {
  Sample,
  StateSample,
  ChartNode,
  Chart,
  ChartStateNode,
} from "./types";

const DELTA = 80;
function App(): ReactElement {
  const [currentSample, setSample] = useState<StateSample>(null);
  const [chart, updateChart] = useState<Chart>([]);
  const [rejected, setRejected] = useState<ChartStateNode>(null);

  const paletteClickHandler = useCallback((sample: StateSample): void => {
    setSample(sample);
  }, []);

  const canvasClickHandler = useCallback((col: number, row: number): void => {
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
  }, [currentSample, chart]);

  const nodeClickHandler = useCallback((col: number, row: number): void => {
    if (currentSample) {
      const clickedNode = chart.find(
        (node) => node.col === col && node.row === row
      );
      if (clickedNode) {
        setRejected(clickedNode);
        setTimeout(() => setRejected(null), 1000);
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
  }, [currentSample, chart]);

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
  const nodes = chart.map((node) => <Node {...nodeProps(node)} />);
  return (
    <div className="App">
      <h1>Board game prototype</h1>
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
