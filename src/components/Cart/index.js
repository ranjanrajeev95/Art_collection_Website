import React, { useState } from "react";
import InterestForm from "./components/InterestForm";
import CartItem from "./components/CartItem";
import { getItems } from "../../helpers/storage";

import "./styles.css";

const Cart = () => {
  let [, setState] = useState();
  const items = getItems();
  return (
    <div className="cart">
      <div>
        <h2>Your cart</h2>
        {items && items.length > 0
          ? items.map(id => (
              <CartItem id={id} key={id} rerender={() => setState({})} />
            ))
          : "Your cart is empty"}
      </div>
      <h2>Submit interest form</h2>
      <p>
        We are currently working on adding purchasing capabilities to our
        website. Until then, please use the form below to submit a purchase
        request and we will contact you with payment details. We apologize for
        the inconvenience, and thank you for your patience!
      </p>
      <InterestForm items={items} />
    </div>
  );
};

export default Cart;