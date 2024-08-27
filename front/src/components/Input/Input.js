import React from "react";

const Input = ({ label, inputId, type, onChange, value, name, placeholder }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', }}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
