import React from "react";
import { useTheme } from "../../hook/useTheme";

export const DarkMode = () => {
  const [theme, handleChange] = useTheme("dark");
  return (
    <div className="container-switch">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
