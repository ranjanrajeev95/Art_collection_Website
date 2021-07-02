import React from "react";
import { withRouter } from "react-router";
import Button from "../../../Button";
import { addItem } from '../../../../helpers/storage';

import "./styles.css";

const ArtItem = ({ image, price, title, id, sold, history }) => {
  // console.log(id)
  return (
    <div className="artItem">
      <img src={image} alt={title} />
      <p>{price}</p>
      <p>{title}</p>
      <div className="inline">
        <Button
          onClick={() =>
            history.push({
              pathname: `${"/item/" + title}`,
              state: { id: id }
            })
          }
        >
          LEARN MORE
        </Button>
        {sold ? (
          <Button isDisabled={true}>SOLD OUT</Button>
        ) : (
          <Button
            isFilled={true}
            onClick={() => addItem(id)}
          >
            ADD TO CART
          </Button>
        )}
        {/* <Button isFilled={true}>ADD TO CART</Button> */}
      </div>
    </div>
  );
};

export default withRouter(ArtItem);
