export function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}