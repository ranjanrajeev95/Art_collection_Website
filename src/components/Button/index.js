import React from "react";

import "./styles.css";

const Button = ({ isFilled, isBig, onClick, isDisabled, children }) => {
  const colorfillClass = isFilled ? "filled" : "";
  const sizeClass = isBig ? "big" : "";
  const disabledClass = isDisabled ? "disabled" : "";
  return (
    <button
      className={`button + ${colorfillClass} + ${sizeClass} + ${disabledClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
