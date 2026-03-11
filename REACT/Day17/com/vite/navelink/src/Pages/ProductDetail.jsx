import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Product ID: {id}</h2>

      <button onClick={() => navigate("/products")}>
        Back to Products
      </button>
    </div>
  );
}

export default ProductDetail;