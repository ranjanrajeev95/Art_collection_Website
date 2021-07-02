import React from "react";
import { withRouter } from "react-router";
import Button from "../Button";

import "./styles.css";

// TODO: In future, restrict this route.
// Can only access this page if interest form was submitted.
const Confirmation = ({ history }) => {
  return (
    <div className="confirmation">
      <h2>Purchase request submitted.</h2>
      <p>
        Payment and billing details will be sent to your email. Thank you for
        your patience as we complete building the site.
      </p>
      <Button isBig={true} onClick={() => history.push("/")}>RETURN TO HOME</Button>
    </div>
  );
};

export default withRouter(Confirmation);
