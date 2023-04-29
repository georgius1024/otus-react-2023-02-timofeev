import "@/components/Node.scss";
type clickHandler = (col: number, row: number) => void;
type NodeProps = {
  col: number;
  row: number;
  dx: number;
  dy: number;
  color: string;
  symbol: string;
  background: string;
  rejecting: boolean;
  onClick: clickHandler;
};

const NODE_SIZE = 64;

export default function Node(props: NodeProps) {
  const nodeStyle = {
    left: `${(props.col + 0.5) * props.dx - NODE_SIZE / 2}px`,
    top: `${(props.row + 0.5) * props.dy - NODE_SIZE / 2}px`,
    width: `${NODE_SIZE}px`,
    height: `${NODE_SIZE}px`,
    fontSize: `${NODE_SIZE * 0.66}px`,
    color: props.color,
    backgroundColor: props.background,
  };
  const nodeClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    props.onClick(props.col, props.row);
  };
  const className = `node ${props.rejecting ? "rejecting" : ""}`;
  return (
    <div className={className} style={nodeStyle} onClick={nodeClickHandler}>
      {props.symbol}
    </div>
  );
}
