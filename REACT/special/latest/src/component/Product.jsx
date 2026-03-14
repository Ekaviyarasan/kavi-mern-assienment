import { useState } from "react";

function Product() {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 50000,
    stock: 10
  });

  const increaseStock = () => {
    setProduct({ ...product, stock: product.stock + 1 });
  };

  return (
    <div>
      <p>{product.name}</p>
      <p>Stock: {product.stock}</p>

      <button onClick={increaseStock}>
        Add Stock
      </button>
    </div>
  );
}
export default Product