import "@/components/Palette.scss";
import { useState, ReactElement, useCallback } from "react";
type Sample = {
  color: string;
  symbol: string;
};
type clickHandler = (sample: Sample | null) => void;

type PaletteProps = {
  onClick: clickHandler;
};

const NODE_SIZE = 48;
const NODE_SYMBOLS = ["🐷", "🐱", "🐶", "🐭", "🦊", "🐻", "❌"];
const NODE_COLORS = [
  "red",
  "silver",
  "navy",
  "orange",
  "green",
  "teal",
  "white",
];

const shuffle = (list: string[]) => list.sort(Math.random);

export default function Palette(props: PaletteProps): ReactElement {
  const [selected, setSelected] = useState<number>(0);

  const sampleStyle = (sample: Sample, index: number) => ({
    width: `${NODE_SIZE}px`,
    height: `${NODE_SIZE}px`,
    fontSize: `${NODE_SIZE * 0.66}px`,
    color: sample.color,
    backgroundColor: sample.color,
    outlineStyle: index === selected ? "solid" : "none",
  });

  const sampleClickHandler = useCallback(
    (sample: Sample, index: number) =>
      (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        if (sample.symbol !== "❌") {
          props.onClick(sample);
          setSelected(index);
        } else {
          props.onClick(null);
          setSelected(-1);
        }
      },
    []
  );

  const samples = NODE_SYMBOLS.map((symbol, index): Sample => {
    return {
      symbol,
      color: NODE_COLORS[index],
    };
  }).map((sample: Sample, index: number) => {
    return (
      <div
        className="sample"
        key={sample.symbol}
        style={sampleStyle(sample, index)}
        onClick={sampleClickHandler(sample, index)}
      >
        {sample.symbol}
      </div>
    );
  });
  return <div className="palette">{samples}</div>;
}
