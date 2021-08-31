import React from "react";
export const ThemeContext = React.createContext({});

export default function LightOrDark({ children }) {
  const suppMode = useState(() => {
    if (typeof window !== "undefined") {
      const display = window.localStorage.getItem("dark_mode");

      if (display) {
        return display === "true";
      } else if (window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }
    return false;
  });

  const dark = suppMode;

  useEffect(() => {
    if (dark) {
      window.localStorage.setItem("dark_mode", true);
      document.body.classList.add("dark");
    } else {
      window.localStorage.setItem("dark_mode", false);
      document.body.classList.remove("dark");
    }

    if (!document.body.classList.contains("animate")) {
      window.setTimeout(() => {
        document.body.classList.add("animate");
      }, 0);
    }
  }, dark);

  return (
    <ThemeContext.Provider value={suppMode}>{children}</ThemeContext.Provider>
  );
}
