import React from "react";
import Title from "../../components/Title";

export default function Randomize() {
  const handleClick = (e) => {
    console.log(getRandomColor());
    let body = document.querySelector("body");
    console.log(body);
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABDFEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="container text-center">
      <Title text={"Randomize Color"} />
      <div></div>
      <button className="btn btn-danger" onClick={handleClick}>
        click me
      </button>
      <button className="btn btn-primary" onClick={handleClick}>
        click me
      </button>
      <button className="btn btn-success" onClick={handleClick}>
        click me
      </button>
      <button className="btn btn-warning" onClick={handleClick}>
        click me
      </button>
    </div>
  );
}
