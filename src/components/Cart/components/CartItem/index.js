import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../../../Button"
import { artStoreData } from "../../../../data";
import { removeItem } from "../../../../helpers/storage";

const CartItem = ({ id, rerender, history }) => {
    const item = artStoreData.filter(item => item.id === id)[0];
    return (
      <div className="cartItem">
        <img src={item.img} alt={item.title} />
        <div className="details">
          <p className="price">{item.price}</p>
          <p className="title">{item.title}</p>
          <div>
            <Button
              onClick={() =>
                history.push({
                  pathname: `${"/item/" + item.title}`,
                  state: { id: id }
                })
              }
              isSmall={true}
            >
              LEARN MORE
            </Button>
            <Button
              isRed={true}
              isSmall={true}
              onClick={() => {
                removeItem(id);
                rerender();
              }}
            >
              REMOVE
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default withRouter(CartItem);