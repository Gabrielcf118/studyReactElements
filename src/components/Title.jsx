import React from "react";

export default function Title({ text, classes }) {
  return (
    <h1 className={!classes ? "title text-center" : classes && "title"}>
      {!text ? "title" : text}
    </h1>
  );
}
