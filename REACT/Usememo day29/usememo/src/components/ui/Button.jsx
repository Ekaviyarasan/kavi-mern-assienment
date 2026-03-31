export function Button({ children, ...props }) {
  return (
    <button
      style={{ padding: "8px 12px", margin: "5px", cursor: "pointer" }}
      {...props}
    >
      {children}
    </button>
  );
}