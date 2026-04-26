export default function Input({ placeholder, type = "text", onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="border p-2 m-2 rounded w-full"
    />
  );
}