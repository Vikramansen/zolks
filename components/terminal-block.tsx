type TerminalBlockProps = {
  lines: string[];
};

export function TerminalBlock({ lines }: TerminalBlockProps) {
  return (
    <div className="terminal-card mt-4 w-full max-w-3xl">
      <pre>
        <code className="font-mono text-[0.8rem] text-text">
          {lines.map((line, idx) => {
            const trendColor =
              line.includes("↑") ? "text-warning" : line.includes("↓") ? "text-success" : "";
            return (
              <span
                key={`${line}-${idx}`}
                className={`block whitespace-pre ${trendColor}`}
              >
                {line}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
