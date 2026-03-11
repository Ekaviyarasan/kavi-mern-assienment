import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Products</h1>

      <ul>
        <li>
          <Link to="/products/1">Laptop</Link>
        </li>
        <li>
          <Link to="/products/2">Mobile</Link>
        </li>
        <li>
          <Link to="/products/3">Tablet</Link>
        </li>
      </ul>
    </div>
  );
}

export default Product;