import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <div className={`key ${className}`} onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};

export default Button;
