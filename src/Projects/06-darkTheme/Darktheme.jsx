/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

export default function Darktheme() {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  let doc = document.body.classList;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        doc.remove("bg-dark");
        doc.remove("text-light");
        doc.add("bg-light");
        doc.add("text-dark");
        break;
      case themes.dark:
        doc.remove("bg-light");
        doc.remove("text-dark");
        doc.add("bg-dark");
        doc.add("text-light");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}
