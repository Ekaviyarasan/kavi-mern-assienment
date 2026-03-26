import { useApp } from "../context/AppContext";

export default function Cart() {
  const { cartCount, setCartCount } = useApp();

  return (
    <button onClick={() => setCartCount(cartCount + 1)}>
      Add Product
    </button>
  );
}