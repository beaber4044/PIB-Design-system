import { cn } from "../lib/cn";

export interface LineChartSeries {
  name: string;
  color: string;
  data: number[];
}

export interface LineChartProps {
  series: LineChartSeries[];
  labels: string[];
  height?: number;
  className?: string;
}

export function LineChart({ series, labels, height = 220, className }: LineChartProps) {
  const width = 640;
  const padding = 32;
  const max = Math.max(1, ...series.flatMap((s) => s.data));
  const stepX = (width - padding * 2) / Math.max(1, labels.length - 1);

  function toPoints(data: number[]) {
    return data
      .map((v, i) => {
        const x = padding + i * stepX;
        const y = height - padding - (v / max) * (height - padding * 2);
        return `${x},${y}`;
      })
      .join(" ");
  }

  const gridLines = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div className={cn("w-full", className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="line chart">
        {gridLines.map((g) => {
          const y = padding + g * (height - padding * 2);
          return (
            <line
              key={g}
              x1={padding}
              x2={width - padding}
              y1={y}
              y2={y}
              stroke="currentColor"
              className="text-neutral-100"
              strokeWidth={1}
            />
          );
        })}
        {series.map((s) => (
          <polyline
            key={s.name}
            points={toPoints(s.data)}
            fill="none"
            stroke={s.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {series.map((s) =>
          s.data.map((v, i) => {
            const x = padding + i * stepX;
            const y = height - padding - (v / max) * (height - padding * 2);
            return <circle key={`${s.name}-${i}`} cx={x} cy={y} r={2.5} fill={s.color} />;
          })
        )}
        {labels.map((label, i) => (
          <text
            key={label}
            x={padding + i * stepX}
            y={height - 8}
            textAnchor="middle"
            className="fill-neutral-400"
            fontSize={10}
          >
            {label}
          </text>
        ))}
      </svg>
      <div className="flex flex-wrap gap-4 mt-2">
        {series.map((s) => (
          <span key={s.name} className="flex items-center gap-1.5 text-xs text-neutral-600">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
