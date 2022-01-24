import React, { useState } from "react";
import { arrDATA } from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import styles from "./Shop.module.css";

export default function Shop() {
  const dataArr = arrDATA.slice(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10) + 15
  );
  const [productData, setProductData] = useState(dataArr);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className={styles.shopContainer}>
      <div className={styles.productContainer}>
        {productData.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </div>
      <div className={styles.cartContainer}>
        <Cart cart={cart} />
      </div>
    </div>
  );
}
