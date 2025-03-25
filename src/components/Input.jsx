import React from "react";
import "./styles/Input.css";

export function Input({ value, onChange, placeholder, className }) {
  return (
    <div className="input-block">
      <input
        className={`input ${className}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
