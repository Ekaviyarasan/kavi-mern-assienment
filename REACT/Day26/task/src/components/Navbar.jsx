import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { cartCount } = useApp();

  return <h3>Cart: {cartCount}</h3>
}