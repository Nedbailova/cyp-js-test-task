import React from "react";
import "./styles/Button.css";

export function Button({ onClick, text }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}
