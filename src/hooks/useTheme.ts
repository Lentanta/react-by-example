import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState({
    bgColor: "white",
    fontColor: "black"
  });

  const changeTheme = (name: "mono" | "colored" | "default") => {
    switch (name) {
      case "mono":
        setTheme({ bgColor: "black", fontColor: "white" })
        break;

      case "colored":
        setTheme({ bgColor: "pink", fontColor: "blue" })
        break;

      default:
        setTheme({ bgColor: "white", fontColor: "black" })
        break;
    }
  };

  const resetTheme = () => {
    setTheme({
      bgColor: "white",
      fontColor: "black"
    });
  };

  return {
    theme,
    changeTheme,
    resetTheme
  }
};

