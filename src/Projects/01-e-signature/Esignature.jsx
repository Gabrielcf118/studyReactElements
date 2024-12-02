import React, { useState } from "react";
import Title from "../../components/Title";

export default function Esignature() {
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"subtitle"} text={date} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          style={{ borderBottom: "2px dotted", outline: "none" }}
          value={date}
          onChange={handleDateChange}
        />
        <input
          type="text"
          style={{ borderBottom: "2px dotted", outline: "none" }}
          value={name}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
