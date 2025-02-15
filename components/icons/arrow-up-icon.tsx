interface ArrowUpIconProps {
  width?: string;
  height?: string;
  color?: string;
}

export default function ArrowUpIcon({
  width,
  height,
  color,
}: ArrowUpIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "32"}
      height={height ? height : "32"}
      fill={color ? color : "#000000"}
      viewBox="0 0 256 256"
    >
      <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
    </svg>
  );
}
