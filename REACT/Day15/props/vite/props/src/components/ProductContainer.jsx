import React from 'react'
import ProductList from './ProductList';

function ProductContainer() {

    const product=[{name:"mobile",price:20000,model:"realme"},{name:"labtop",price:25000,model:"realme"},{name:"TV",price:22000,model:"realme"}]
    console.log(product);
    
  return (
    <>
    <ProductList  model={product}/>
    </>
  )
}

export default ProductContainer