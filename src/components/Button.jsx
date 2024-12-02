import React from "react";

export default function Button({ text, icon, onClick }) {
  return (
    <button className={`btn`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
