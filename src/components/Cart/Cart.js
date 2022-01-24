import React from "react";
import styles from "./Cart.module.css";

export default function Cart({ cart }) {
  const total = cart.reduce((total, product) => total + product.price, 0);
  let shippingCost = 0;
  if (total > 1525) {
    shippingCost = 0;
  } else if (total > 515) {
    shippingCost = 4.99;
  } else if (total > 0) {
    shippingCost = 12.99;
  }
  const grandPrice = total + shippingCost;
  return (
    <div className={styles.cart}>
      <h1>Cart Shop</h1>
      <p>Order Summary : {cart.length}</p>
      <p>Product Price : {total.toFixed(2)}</p>
      <p>Shipping Cost : {shippingCost}</p>
      <p>
        <strong>Total Price : {grandPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
}
