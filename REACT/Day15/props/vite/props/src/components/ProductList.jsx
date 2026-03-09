function ProductCard({ model }) {
  return (
    <div>
      <h2>Products</h2>
      {model.map((product) => (
         <div key={product.id} style={{ border: "1px solid gray", margin: 10, padding: 10   }}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <h3>{product.model}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;