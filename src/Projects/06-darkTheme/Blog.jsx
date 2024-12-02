import React, { useContext } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ThemeContext } from "./context/theme-context";

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="container p-1">
      <Title text={`My blog with ${theme} theme`} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "dark" ? "Light" : "Dark"}
          onClick={changeTheme}
        />
      </span>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi ex taciti
        morbi nascetur malesuada tempor commodo id. Mauris posuere finibus
        lectus efficitur fermentum sapien fringilla adipiscing. Hendrerit mauris
        lorem torquent ex ornare egestas. Ornare sit quam ullamcorper egestas
        aptent est imperdiet. Tellus arcu maecenas sodales sodales fusce vitae
        tempus. Quam scelerisque eu dapibus sit nulla finibus. Enim taciti dolor
        arcu mus dis cras malesuada placerat.
      </p>
    </div>
  );
}
