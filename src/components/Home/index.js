import React from "react";
import { withRouter } from "react-router";

import Button from "../Button";
import ArtItem from "./components/ArtItem";

import { artStoreData } from "../../data"
import "./styles.css";

const Home = ({ history }) => {
  
  return (
    <div className="home">
      <div className="tbd"></div>
      <div className="inline">
        <Button isBig={true}>LEARN MORE</Button>
        <Button isBig={true} onClick={() => history.push("/contact")}>
          CONTACT
        </Button>
      </div>
      <div className="art">
        {artStoreData.map(({ img, price, title, id, sold}) => (
          <ArtItem
            id={id}
            key={title}
            image={img}
            price={price}
            title={title}
            sold={sold}
          ></ArtItem>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Home);
