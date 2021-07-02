import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../Button";
import { addItem } from '../../helpers/storage';

import "./styles.css";
import { artStoreData } from "../../data";

const ArtItem = ({ location }) => {
  const id = location.state.id;
  console.log(id);
  const item = artStoreData.filter(item => item.id === id)[0];
  console.log(artStoreData.filter(item => item.id === id));
  console.log(item);
  return (
    <div className="artItem">
      <img src={item.img} alt={item.title} />
      <p>{item.price}</p>
      <p>{item.title}</p>
      <p>{item.description}</p>
      {item.sold ? (
        <Button isDisabled={true}>SOLD OUT</Button>
      ) : (
        <Button isFilled={true} onClick={() => addItem(id)}>ADD TO CART</Button>
      )}
    </div>
  );
};

export default withRouter(ArtItem);
