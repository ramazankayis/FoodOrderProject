import React, { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            quantity={item.quantity}
            name={item.name}
            price={item.price}
            onIncrease={()=>cartCtx.addItem(item)}
            onDecrease={()=>cartCtx.removeItem(item)}
            />
        ))}
      </ul>
      <p className="cart-total"> {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
