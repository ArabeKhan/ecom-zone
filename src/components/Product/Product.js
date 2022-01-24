import React from "react";
import styles from "./Product.module.css";

export default function Product({ product, handleAddProduct }) {
  const { name, img, seller, price, stock } = product;
  return (
    <div className={styles.product}>
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className={styles.productInfo}>
        <h4>{name}</h4>
        <p>
          <small>By : {seller}</small>
        </p>
        <p>$ {price}</p>
        <br />
        <p>Only {stock} left in stock</p>
        <button onClick={() => handleAddProduct(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
