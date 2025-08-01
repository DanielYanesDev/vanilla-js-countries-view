import {
  LIGHT_THEME_TOGGLE_ICON,
  DARK_THEME_TOGGLE_ICON,
} from "../../icons.js";

export const getInitialTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export const ThemeToggle = (button) => {
  const storedTheme = localStorage.getItem("theme");
  const theme = storedTheme || getInitialTheme();

  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);

  button.innerHTML =
    theme === "dark" ? DARK_THEME_TOGGLE_ICON : LIGHT_THEME_TOGGLE_ICON;
};

export const toggleTheme = (button) => {
  const current = localStorage.getItem("theme") || getInitialTheme();
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  ThemeToggle(button);
};
